let cart = [];

exports.addToCart = (req, res) => {
  console.log('Received request to add to cart');
  const { productId, quantity } = req.body;
  if (!productId || !quantity) {
    return res.status(400).send({ message: 'ProductId and quantity are required' });
  }
  cart.push({ productId, quantity });
  res.status(200).send({ message: 'Product added to cart' });
};

exports.getCart = (req, res) => {
  console.log('Received request to get cart');
  res.status(200).send(cart);
};