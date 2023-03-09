const { UserModel } = require('../models/userModel');

exports.createUser = async (req, res) => {
    try {
        const userEntry = req.body;
        const user = new UserModel(userEntry);
        const { password, confirmPassword } = userEntry;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.getUser = (req, res) =>
    res.status(500).json({
        status: 'failed',
        message: 'route does not created',
    });

exports.getUsers = (req, res) =>
    res.status(500).json({
        status: 'failed',
        message: 'route does not created',
    });
