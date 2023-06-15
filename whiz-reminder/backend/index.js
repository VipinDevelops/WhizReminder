const dotenv = require("dotenv")
const cors = require("cors");
const express = require('express');


// App config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});