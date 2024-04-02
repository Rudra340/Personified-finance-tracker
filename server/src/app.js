const express = require('express');
const dbConnect = require('./config/dbConnect');
const { registerUser } = require('./controllers/users/usercontroller');
const userRoute = require('./routes/users/usersRoute');

const app = express();

// databse connection
dbConnect();

// routes
app.use('/',userRoute)

module.exports = app;