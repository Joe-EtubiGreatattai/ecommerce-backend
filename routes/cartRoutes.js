const express = require('express');
const { addToCart, getCart } = require('../controllers/cartController');

const router = express.Router();

router.post('/', addToCart);
router.get('/', getCart);

module.exports = router;
