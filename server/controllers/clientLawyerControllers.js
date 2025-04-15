const asyncHandler = require("express-async-handler");
const User=require('../models/userModel');
const ClientLawyer=require('../models/clientLawyerModel');

const getLawyers=asyncHandler(async(req,res)=>{
    //find if user exist
    const user= await User.findById(req.user._id);
    if(!user){
        res.status(401);
        throw new Error("Invalid Request");
    }


    //finding all Lawyers 
    const lawyers=await User.find({isLawyer:true});
     if(!lawyers){
        res.status(404);
        throw new Error("No Lawyers Found");
     } 
     res.status(200).json(lawyers)
    
})

const getLawyer=asyncHandler(async(req,res)=>{
    //find if user exist
    
    const user= await User.findById(req.user._id);
    if(!user){
        res.status(401);
        throw new Error("Invalid Request");
    }


    //finding all Lawyers 
    const lawyer=await User.findById(req.params.id);
     if(!lawyer){
        res.status(404);
        throw new Error("No Lawyer Found");
     } 
     res.status(200).json(lawyer)
})






const apointLawyer=asyncHandler(async(req,res)=>{
    // find if user exist
    const user= await User.findById(req.user._id);
    if(!user){
        res.status(401);
        throw new Error("Invalid Request");
    }

    const lawyer=await User.findById(req.params.id);
    
    if(!lawyer){
        res.status(401);
        throw new Error("Please Fill All Details");
    }
   


    const relation=await ClientLawyer.create({client:user._id,clientName:user.name,lawyer:lawyer._id,lawyerName:lawyer.name})
    if(!relation){
        res.status(404);
        throw new Error("Lawyer Not Apointed");
     } 
     res.status(200).json(relation)
    res.send("Lawyer Added")
})

module.exports={getLawyers,getLawyer,apointLawyer}