const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

const signupController = async (req, res) => {
  try {
    const userEntry = req.body;
    const { name, email, password, confirmPassword } = userEntry;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    const user = new UserModel({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'Account Created Succesfully', user });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = signupController;
