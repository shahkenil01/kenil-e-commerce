const { Category } = require('../models/category.js');
const { Product } = require('../models/products.js');
const express = require('express');
const router = express.Router();

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

  let product = new Product(req.body);

  product = await product.save();
  if (!product) {
      res.status(500).json({
          error: err,
          success: false
      })
  }

  res.status(201).json(product);
});

module.exports =router;