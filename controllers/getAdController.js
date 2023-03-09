const AdvertisingModel = require('../models/advertisingModel');

const getAdController = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(401).json({
                status: 'failed',
                message: 'id param missing',
            });
            return;
        }
        const ad = await AdvertisingModel.findById(id);
        if (!ad) {
            res.status(404).json({ status: 'failed', message: 'no ad found' });
            return;
        }
        res.status(200).json({ status: 'success', data: ad });
    } catch (err) {
        res.status(500).json({ status: 'failed', message: err });
    }
};

module.exports = getAdController;
