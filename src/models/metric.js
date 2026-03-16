const mongoose = require('mongoose');
const metricSchema = new mongoose.Schema({
    name: String,
    value: Number
});
const Metric = mongoose.model('Metric', metricSchema);
module.exports = { Metric };