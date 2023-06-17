const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config();

const connectDB = async () => {
    const MONGOURI = process.env.MONGOURI;
    try {
        const connect = await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;