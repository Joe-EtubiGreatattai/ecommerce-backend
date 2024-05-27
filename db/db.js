// db.js
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://mongoadmin:13c4ctpbXTZdnJq4@cluster0.rdnpm0o.mongodb.net/ecommerce';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;