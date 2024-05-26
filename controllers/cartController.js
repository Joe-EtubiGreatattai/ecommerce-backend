// cartController.js
const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
  console.log('Received request to add to cart');
  const { productId, quantity } = req.body;
  if (!productId || !quantity) {
    return res.status(400).send({ message: 'ProductId and quantity are required' });
  }

  try {
    const cartItem = new Cart({ productId, quantity });
    await cartItem.save();
    res.status(200).send({ message: 'Product added to cart' });
  } catch (err) {
    console.error('Error adding to cart', err);
    res.status(500).send({ message: 'Error adding to cart' });
  }
};

exports.getCart = async (req, res) => {
  console.log('Received request to get cart');
  try {
    const cart = await Cart.find();
    res.status(200).send(cart);
  } catch (err) {
    console.error('Error getting cart', err);
    res.status(500).send({ message: 'Error getting cart' });
  }
};