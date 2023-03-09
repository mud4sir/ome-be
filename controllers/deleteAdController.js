const AdvertisingModel = require('../models/advertisingModel');
const deleteAdController = async function (req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(500).json({
                status: 'failed',
                message: 'id param missing',
            });
            return;
        }
        const deletedModel = await AdvertisingModel.findByIdAndDelete(id);
        if (!deletedModel) {
            res.status(404).json({
                status: 'failed',
                message: 'no record found for current id',
            });
            return;
        }
        res.status(201).json({
            status: 'success',
            message: 'record deleted successfully',
        });
    } catch (error) {
        res.status(500).json({ status: 'failed', message: error });
    }
};

module.exports = deleteAdController;
