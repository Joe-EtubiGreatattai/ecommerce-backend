// controllers/productController.js
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
    try {
      const products = await Product.find({}, null, { maxTimeMS: 60000 });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Get a single product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};