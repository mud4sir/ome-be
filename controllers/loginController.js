const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

const loginController = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(401).send({ message: 'Invalid email or password' });
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign(
          { email: user.email },
          process.env.JWT_SECRET_KEY,
        );
        res.send({ token });
      } else {
        res.status(401).send({ message: 'Invalid email or password' });
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = loginController;
