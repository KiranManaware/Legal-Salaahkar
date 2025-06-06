const asyncHandler = require("express-async-handler");
const User=require('../models/userModel');
const Complaint=require('../models/complaintModel');
const Comment=require('../models/commentModel')

//All comments
const getComments=asyncHandler(async(req,res)=>{
    // find if user exist
    const user= await User.findById(req.user._id);
    if(!user){
        res.status(401);
        throw new Error("Invalid Request");
    }

    const complaint=await Complaint.findById(req.params.id);
    if(!complaint){
        res.status(404);
        throw new Error("Complaint Not Raised");
    }

    const comments= await Comment.find({complaint:complaint.id});
    if(!comments){
        res.status(404);
        throw new Error("Comments Not Found");
    }
     res.status(200).json(comments);
    
})

// raise comment
const addComment=asyncHandler(async(req,res)=>{

    const {text}=req.body;
    if(!text){
        res.status(400);
        throw new Error("Please Fill All Details");
    }


    // find if user exist
    const user= await User.findById(req.user._id);
    if(!user){
        res.status(401);
        throw new Error("Invalid Request");
    }

    const complaint=await Complaint.findById(req.params.id);
    if(!complaint){
        res.status(404);
        throw new Error("Complaint Not Raised");
    }

    const comment= await Comment.create({client:user._id,complaint:complaint._id,message:text});
    if(!comment){
        res.status(401);
        throw new Error("Comment Not Added");
    }
     res.status(201).json(comment);
})

module.exports={getComments,addComment};