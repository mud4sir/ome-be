const AdvertisingModel = require('../models/advertisingModel');

const postAdController = async (req, res) => {
    try {
        const { name, title, price, description, contact } = req.body;
        if (!name || !title || !price || !description || !contact) {
            res.status(400).json({
                status: 'failed',
                message: 'invalid values sent',
            });
            return;
        }
        const newAd = await new AdvertisingModel(req.body);
        await newAd.save();
        res.status(201).json({
            status: 'success',
            message: 'ad created successfuly',
            data: newAd,
        });
    } catch (err) {
        res.status(500).json({ status: 'failed', message: err });
    }
};

module.exports = postAdController;
