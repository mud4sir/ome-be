const AdvertisingModel = require('../models/advertisingModel');

const editAddConroller = async function (req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({
                status: 'failed',
                message: 'id param missing',
            });
            return;
        }
        const updatedData = req.body;
        const updatedRecord = await AdvertisingModel.findByIdAndUpdate(
            id,
            updatedData,
            { new: true },
        );
        if (!updatedRecord) {
            res.status(204).json({
                status: 'failed',
                message: 'no record found',
            });
            return;
        }
        res.status(200).json({
            status: 'success',
            message: 'record updated successfully',
            data: updatedRecord,
        });
    } catch (err) {
        res.status(500).json({ status: 'failed', message: err });
    }
};

module.exports = editAddConroller;
