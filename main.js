const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
// file import area

mongoose.connect("mongodb://localhost/StackDB",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () =>
  console.log("connected to StackDB")
);


// use area
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes
const { registerRoute } = require("./route/register");
const { loginRoute } = require("./route/login");
<<<<<<< HEAD
// const { ForgotRoute } = require("./route/forgetPassword");
// const { ResetPasswordRoute } = require("./route/reset-password");
=======
const { ForgotRoute} = require("./route/forgetPassword")
const { ResetPasswordRoute} = require("./route/reset-password")
>>>>>>> 6a07e755ef0e86fbfc1b9c46edcf45ace9045aa9

// Route Middleware
app.use("/api", registerRoute);
app.use("/api", loginRoute);
// app.use("/api", ForgotRoute);
// app.use("/api", ResetPasswordRoute);



app.listen(4040, () => console.log("server is runing"));
