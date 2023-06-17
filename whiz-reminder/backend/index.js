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

setInterval(async () => {
  try {
    const reminderList = await Reminder.find({});

    reminderList.forEach(async (reminder) => {
      if (!reminder.isReminded) {
        const now = new Date();
        if (new Date(reminder.remindAt) - now < 0) {
          await Reminder.findByIdAndUpdate(reminder.id, { isReminded: true });

          const accountSid = process.env.ACCOUNT_SID;
          const authToken = process.env.AUTH_TOKEN;
          const client = require("twilio")(accountSid, authToken);

          const date = new Date(reminder.remindAt);
          const time = date.toLocaleString("en-US", { timezone: "Asia/Kolkata" });

          console.log(`Reminder for ${reminder.reminderName}`)
          await client.messages.create({
            body: `Hey Vipin, quick reminder! Don't forget ${reminder.reminderName} - ${reminder.reminderDescription} at ${time}.
              `,
            from: "whatsapp:+14155238886",
            to: `whatsapp:${process.env.MY_PHONE_NUMBER}`,
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
}, 1000);

// API endpoints
app.get('/', (req, res) => {
  res.send('Hello Welcome to the Whiz reminder!');
});

app.get('/api/Getallreminder', async (req, res) => {
  try {
    const allReminder = await Reminder.find({ isReminded: false });
    res.json(allReminder);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.post('/api/createreminder', async (req, res) => {
  try {
    const { reminderName, reminderDescription, remindAt } = req.body;
    const newReminder = new Reminder({
      reminderName,
      reminderDescription,
      remindAt,
      isReminded: false,
    });
    await newReminder.save();
    const allReminder = await Reminder.find({ isReminded: false });
    res.json(allReminder);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.delete('/api/deleteReminder', async (req, res) => {
  try {
    const { id } = req.body;
    await Reminder.findByIdAndDelete(id);
    const allReminder = await Reminder.find({ isReminded: false });
    res.json(allReminder);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

const port = process.env.PORT;
const server = process.env.SERVER;

app.listen(port, () => {
  console.log(`Server is running on port ${server}:${port}`);
});