const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (username === 'SoftAmos' && password === 'SoftAmos') {
    // Assuming a secret key for JWT signing
    const secretKey = 'your_secret_key';
    // Generate a JWT token
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' }); // Expires in 1 hour
    res.status(200).send({ message: 'Login successful', token });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
};
