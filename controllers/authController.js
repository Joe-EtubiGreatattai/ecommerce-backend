const jwt = require('jsonwebtoken');

// Function to authenticate user
const authenticateUser = (req, res) => {
  const { username, password } = req.body;

  // Log input
  console.log('Received username:', username);
  console.log('Received password:', password);

  // Check if username and password match
  if (username === 'SoftAmos' && password === 'SoftAmos') {
    // Assuming a secret key for JWT signing
    const secretKey = 'secret_key';
    // Generate a JWT token
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' }); // Expires in 1 hour

    // Log token
    console.log('Generated token:', token);

    res.status(200).json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Authentication failed. Invalid username or password.' });
  }
};

module.exports = {
  authenticateUser
};
