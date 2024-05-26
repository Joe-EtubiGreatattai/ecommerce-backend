exports.login = (req, res) => {
    const { username, password } = req.body;
    if (username === 'SoftAmos' && password === 'SoftAmos') {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  };
  