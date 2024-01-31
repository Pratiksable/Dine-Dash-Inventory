const asyncHandler = require("express-async-handler")
const User  = require("../models/userModel");




const registerUser = asyncHandler(async(req,res) => {
const {name,email,password} = req.body

//VALIDATIONS

if(!name || !email || !password){
  res.status(400)
  throw new Error('Please provide all fields')
}

if(password.length < 8){
  res.status(400)
  throw new Error('Password must be upto 8 characters')
}

// Check if user email already exists
const userExists = await  User.findOne({email:email})

if(userExists){
  res.status(400)
  throw new Error('Email has already been registered')
}

//Create new user

const user = await User.create({
  name,
  email,
  password,
})

if(user){
  const {_id,name,email, photo , phone , bio} = user
  res.status(201).json({
    _id,
    name,email, photo , phone , bio
  })
}else {
  res.status(400)
  throw new Error("Invalid User Data")
}
});

module.exports = {
  registerUser,
}