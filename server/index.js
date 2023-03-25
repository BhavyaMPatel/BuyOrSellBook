const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

// require("dotenv").con fig({ path: "./config.env" });
const port = process.env .PORT || 5000;
app.use(cors());
app.use(express.json());
const Routes=require('./routes/route');
const AuthRoutes=require('./routes/authroute');
app.use(Routes)
app.use(AuthRoutes)
// app.use(require("./routes/record"));
// get driver connection
// const dbo = require("./db/conn");

mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1:27017/MernApp",{useNewUrlParser: true});

 
app.listen(port, () => {
  // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
  console.log(`Server is running on port: ${port}`);
});