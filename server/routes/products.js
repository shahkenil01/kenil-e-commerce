const { Category } = require('../models/category.js');
const { Product } = require('../models/products.js');
const express = require('express');
const router = express.Router();

const pLimit = require('p-limit').default;
const cloudinary = require('cloudinary').v2;

router.get(`/`, async (req, res) => {
  const productList = await Product.find().populate("category");

  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.send(productList);
});

router.post(`/create`, async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(404).send("invalid Category!");
  }

  try {
    const limit = pLimit(2);

    if (!Array.isArray(req.body.images) || req.body.images.length === 0) {
      return res.status(400).json({ error: "No images provided", status: false });
    }

    const imagesToUpload = req.body.images.map((image) => {
      return limit(async () => {
        const result = await cloudinary.uploader.upload(image);
        return result;
      });
    });

    const uploadStatus = await Promise.all(imagesToUpload);

    const imgurl = uploadStatus.map((item) => {
      return item.secure_url;
    });

    if (!uploadStatus) {
      return res.status(500).json({
        error: "images cannot upload!",
        status: false
      });
    }

    let product = new Product(req.body);
    product = await product.save();

    if (!product) {
      return res.status(500).json({
        error: "Product save failed!",
        success: false
      });
    }

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({
      error: err.message,
      success: false
    });
  }
});


module.exports =router;