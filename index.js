const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Default route
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to our eCommerce API!' });
});

app.use('/api', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/products', productRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
