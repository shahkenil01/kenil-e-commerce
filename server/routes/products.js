const { Category } = require('../models/category');
const { Product } = require('../models/product');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
  const productList = await Product.find().populate("category");

  if (!productList) {
    res.status(500).json({ success: false });
  }

  res.send(productList);
});
