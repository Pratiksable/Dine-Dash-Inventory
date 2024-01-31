const dotenv = require("dotenv").config();
const  express = require('express');
const mongoose = require("mongoose");
const bodyParser=require('body-parser');
const cors = require("cors");


const app = express();


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