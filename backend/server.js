const dotenv = require("dotenv").config();
const  express = require('express');
const mongoose = require("mongoose");
const bodyParser=require('body-parser');
const cors = require("cors");
const userRoute = require("./routes/userRoute"); 
const errorHandler = require("./middleWare/errorMiddleware")
const app = express();

//MiddleWares

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

//Route Middleware
app.use("/api/users", userRoute)


//Routes
app.get("/", (req,res) => {
  res.send("Home Page");
});


//Error MiddleWare
app.use(errorHandler);

const PORT =process.env.PORT || 5000;

//CONNECT TO mongodb and start server

mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        app.listen(PORT,()=>{
          console.log("SERVER RUNNING ON PORT ", PORT);
        })
      })
      .catch((err)=>console.error(err));