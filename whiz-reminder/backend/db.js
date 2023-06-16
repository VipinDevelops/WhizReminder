const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`mongodb://localhost:27017/WhizReminder`, {
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