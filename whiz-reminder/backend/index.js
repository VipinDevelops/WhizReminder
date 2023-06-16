const dotenv = require("dotenv")
const cors = require("cors");
const express = require('express');

const connectDB = require('./db');
const Reminder = require('./model/reminder')

// App config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
dotenv.config();


// DB config
//connect to database
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// API endpoints
app.get('/api/Getallreminder', async (req, res) => {
    try {
        const allReminder = await Reminder.find();
        res.json(allReminder);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

app.post('/api/createreminder', async (req, res) => {
    try {
        const { reminderName, reminderDescription, remindAt, isReminded } = req.body;
        const newReminder = new Reminder({
            reminderName,
            reminderDescription,
            remindAt,
            isReminded,
        });
        await newReminder.save();
        res.json(newReminder);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

app.post('/api/deleteReminder', async (req, res) => {
    try {
        const { id } = req.body;
        await Reminder.findByIdAndDelete(id);
        const allReminder = await Reminder.find();
        res.json(allReminder);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});