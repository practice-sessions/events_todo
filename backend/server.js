const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const todoRoutes = express.Router();
let Todo = require('./models/Todo');

const PORT = 5555;

app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todoRoutes);

//Connect Database
connectDB();

todoRoutes.route('/').get(function(req, res) {
  Todo.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT);
});
