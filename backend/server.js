const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const PORT = 4440;

app.use(cors());
app.use(bodyParser.json());

//Connect Database
connectDB();

app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT);
});
