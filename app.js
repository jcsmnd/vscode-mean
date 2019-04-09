const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect database
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>{
  console.log('connected to mongoDB'+config.database);
});

mongoose.connection.on('error', (err)=>{
  console.log('connection error'+err);
});

const app = express();
const port = 3000;
const users = require('./routes/users');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/users', users);
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// index route
app.get('/', (req, res) => {
  res.send('invald endpoint');
});

// start server
app.listen(port, () => {
  console.log('server start'+port);
});
