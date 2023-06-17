 ![GitHub repo size](https://img.shields.io/github/repo-size/VipinDevelops/WhizReminder)

# What is WhizReminder?

WhizReminder is a WhatsApp reminder bot that lets users schedule and receive reminders through Twilio's APIs. It uses ReactJS, ExpressJS, and MongoDB to create an intuitive interface, ensure reliable message delivery, and store reminder data. It simplifies staying organized and helps users remember important events.

![Screenshot from 2023-06-17 14-16-08](https://github.com/VipinDevelops/WhizReminder/assets/99081689/c5394279-1aa7-47a7-b51f-382b02c117ee)

## Usage 
✔️ Message Reminder Received on WhatsApp <br>

https://github.com/VipinDevelops/WhizReminder/assets/99081689/91d06525-291b-4219-8f34-fb3a8dc5b19d


✔️ Creating Different Reminders <br>

https://github.com/VipinDevelops/WhizReminder/assets/99081689/5931204d-ea15-444f-8d62-d470156333d5



## Features 🔥
- Schedule reminders for any time and date
- Receive reminders through WhatsApp
- Customize reminder messages


## Tech Stack 👨🏻‍💻

WhizReminder is built using the following technologies:

- [React.js](https://react.dev/) - front-end JavaScript library for building user interfaces 
- [Node.js](https://nodejs.org/)  - a cross-platform server environment
- [Express.js](https://expressjs.com/) -  web application framework for building RESTful APIs
- [Twilio API]() - a programmable communication tools 
- [MongoDB](https://www.mongodb.com/) - a NoSQL database
- [Bootstrap](https://getbootstrap.com//) - a CSS framework      

## Quickstart
###  Starting Backend 🛠️

1. Clone this repository: [https://github.com/VipinDevelops/WhizReminder](https://github.com/VipinDevelops/WhizReminder)
2. Navigate to the `whiz-reminder/backend` directory using the command line: `cd whiz-reminder/backend`
3. Rename the `.env-example` file to `.env` and fill it properly with the following environment variables:

   To fill in the `.env` file with the appropriate values, follow the instructions below:

   - `PORT=`  : Set the value to the port number you want your application to run on. For example, you can use `PORT=3000` to run your application on port 3000.

   - `ACCOUNT_SID=` : Replace this with your Twilio Account SID. You can obtain this value from your Twilio account dashboard. 

   - `AUTH_TOKEN=` : Provide your Twilio Account Auth Token. Similar to the Account SID, you can find this in your Twilio account dashboard. 

   - `MY_PHONE_NUMBER=` : Insert your WhatsApp phone number here. This should be the phone number on which you want to recieve WhatsApp reminder messages. 

   - `MONGOURI=` : Add the connection link to your MongoDB database.

   Remember to save the `.env` file after filling in the values.

4. Now Inside the `backend` directory, install the required dependencies by running the following command: `npm install`
5. Start the backend server by executing: `npm start`

### Starting Frontend 🖥️

1. Clone this repository: [https://github.com/VipinDevelops/WhizReminder](https://github.com/VipinDevelops/WhizReminder)
2. Navigate to the `whiz-reminder/frontend` directory using the command line: `cd whiz-reminder/frontend`
3. Inside the `frontend` directory, install the required dependencies by running the following command: `npm install`
4. Navigate to the `src` directory using the command line: `cd src`
5. Open the `config.js` file and replace the `API_URL` with the link where your backend server is running.
6. Start the frontend application by executing the following command: `npm start`

## 🐛 Bug Reporting

If you encounter any bugs, please feel free to [open an issue](https://github.com/VipinDevelops/WhizReminder/issues) on GitHub.

## ⭐ Feature Request

If you have any feature requests or need additional functionality for your specific use case, don't hesitate to [open an issue](https://github.com/VipinDevelops/WhizReminder/issues) on GitHub.


## Support

Don't forget to leave a star ⭐️.
