const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
    reminderName: String,
    reminderDescription: String,
    remindAt: String,
    isReminded: Boolean,
});

const Reminder = mongoose.model("reminder", reminderSchema)

module.exports = Reminder;