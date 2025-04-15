const asyncHandler = require("express-async-handler");
const User=require('../models/userModel');

const getAllUser=asyncHandler(async(req,res)=>{
    const users=await User.find().select('-password');
    if(!users){
        res.status(404);
        throw new Error("Users not found");
    }
    res.status(200).json(users);
})

module.exports=getAllUser
