const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true,"Please add the name"]
    },
    email: {
      type: String,
      required: [true,"Please provide your email address"],
      unique: true,
      trim:true,
      match:[
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email"
      ]
    },
    password:{
        type: String,
        required: [true,"Please add a Password"],
        minLength:[8, "Password must be upto 8 characters"],
        maxLength:[16, "Password must not be above 16 characters"], 
    },
    photo: {
      type: String,
      required: [true,"Please add a Photo"],
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
      
    },
    phone:{
      type:String,
      required: [true,"Please add a Phone Number"],
      default:"+91"
    },
    bio:{
      type:String,
      maxLength:[200,"Limit of 200 crossed"],
      default:"Restaurant Bio"
    },
}, {
  timestamps: true //this will create createdAt and updatedAt field in our schema automatically with current time zone.
})

const User = mongoose.model("User",userSchema)
module.exports = User