const mongoose = require('mongoose');
const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/skyshield-api');
        console.log('Connected to database');
    } catch (error) {
        console.error(error);
    }
};
module.exports = { connectToDatabase };