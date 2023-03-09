const { default: mongoose } = require('mongoose');

const AdvertisingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    email: { type: String, required: false },
    contact: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});

AdvertisingSchema.index({ title: 'text' });

module.exports = mongoose.model('ads', AdvertisingSchema);
