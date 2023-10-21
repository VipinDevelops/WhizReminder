const Reminder = require('../model/reminder-model');

const GetReminders = async (req, res) => {
  try {
    const allReminder = await Reminder.find({ isReminded: false });
    res.json(allReminder);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const CreateReminder = async (req, res) => {
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
    res.status(500).send('Server Error');
  }
};

const DeleteReminder = async (req, res) => {
  try {
    const { id } = req.body;
    await Reminder.findByIdAndDelete(id);
    const allReminder = await Reminder.find({ isReminded: false });
    res.json(allReminder);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
}

module.exports = {
  GetReminders,
  CreateReminder,
  DeleteReminder
};
