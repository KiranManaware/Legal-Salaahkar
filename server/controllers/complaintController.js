const asyncHandler = require("express-async-handler");
const User=require('../models/userModel');
const Complaint=require('../models/complaintModel')


const getComplaints=asyncHandler(async(req,res)=>{

    //find if user exist
    const user= await User.findById(req.user._id);
    if(!user){
        res.status(401);
        throw new Error("Invalid Request");
    }


    //finding all complaints of user
    const complaints=await Complaint.find({user:user._id});
     if(!complaints){
        res.status(404);
        throw new Error("No Complaints Found");
     } 
     res.status(200).json(complaints)
})
const getComplaint=asyncHandler(async(req,res)=>{
    //find if user exist
    const user= await User.findById(req.user._id);
    if(!user){
        res.status(401);
        throw new Error("Invalid Request");
    }


    //finding all complaints of user
    const complaint=await Complaint.findById(req.params.id);
     if(!complaint){
        res.status(404);
        throw new Error("No Complaint Found");
     } 
     res.status(200).json(complaint)
})
const raiseComplaint=asyncHandler(async(req,res)=>{

    const {caseType,description}=req.body;
    if(!caseType||!description){
        res.status(400);
        throw new Error("Please Fill All Details");
    }

    //find if user exist
    const user= await User.findById(req.user._id);
    if(!user){
        res.status(401);
        throw new Error("Invalid Request");
    }

    // complaint raised
    const complaint=await Complaint.create({user:user._id,caseType,description})
    if(!complaint){
        res.status(400);
        throw new Error("Complaint Not Registered");
    }

    res.status(201).json(complaint);
})
const updateComplaint=asyncHandler(async(req,res)=>{
    //find if user exist
    const user= await User.findById(req.user._id);
    if(!user){
        res.status(401);
        throw new Error("Invalid Request");
    }


    //finding all complaints of user
    const updatedcomplaint=await Complaint.findByIdAndUpdate(req.params.id,req.body,{new :true});
     if(!updatedcomplaint){
        res.status(404);
        throw new Error("Complaint Not Updated");
     } 
     res.status(200).json(updatedcomplaint)
})

module.exports={getComplaint,getComplaints,raiseComplaint,updateComplaint};