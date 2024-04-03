const express = require('express');
const dbConnect = require('./config/dbConnect');
const { registerUser } = require('./controllers/users/usercontroller');
const {errorHandler}=require("./middlewares/errorMiddleware");

const userRoute = require('./routes/users/usersRoute');

const app = express();

// middlewares
app.use(express.json());

// databse connection
dbConnect();

// routes
app.use('/',userRoute)

// errors
app.use(errorHandler);

module.exports = app;

// concurrently -n a,b "npm run server" "npm run client"