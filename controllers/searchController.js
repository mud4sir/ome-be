const AdvertisingModel = require('../models/advertisingModel');

const searchController = async function (req, res) {
    try {
        const { title } = req.body;
        if (!title) {
            res.status(400).json({
                status: 'failed',
                message: 'title missing!',
            });
            return;
        }
        const records = await AdvertisingModel.find({
            $text: { $search: title },
        }).limit(10);

        if (records.length <= 0) {
            res.status(404).json({
                status: 'failed',
                message: 'record not found!',
            });
            return;
        }
        res.status(200).json({ status: 'success', message: records });
    } catch (err) {
        res.status(500).json({ status: 'failed', message: err });
    }
};

module.exports = searchController;
