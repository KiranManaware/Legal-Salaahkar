const asyncHandler = require("express-async-handler");
const User=require('../models/userModel');
const Complaint=require('../models/complaintModel');
const Comment=require('../models/commentModel');
const ClientLawyer=require('../models/clientLawyerModel')

const getClients=asyncHandler(async(req,res)=>{
    //getting Lawyer id from User model
    const lawyer=await User.findById(req.user._id);

    // find client id from ClientLawyer Model
    const clients=await ClientLawyer.find({lawyer:lawyer._id});

    //find all details of client form User Model
    
    if(!clients){
        res.status(404);
        throw new Error("clients not found");
    }
    res.status(200).json(clients);

    res.send("All clients")
})

const getComplaints=asyncHandler(async(req,res)=>{
    //lawyer id 
    const lawyerId = req.user._id;

    //Lawyer ke clients ka data fetch karein
    const lawyerClients = await ClientLawyer.find({ lawyer: lawyerId }).select("client").lean();

    //Clients ki IDs ka array banao
     const clientIds = lawyerClients.map(client => client.client);

    //Sirf unhi clients ki complaints fetch karo
     const complaints = await Complaint.find({ user: { $in: clientIds } });
    if(!complaints){
        res.status(404);
        throw new Error("Complaints not found");
    }
    res.status(200).json(complaints);
    res.send("All Compalints")
})

const updateComplaint=asyncHandler(async(req,res)=>{

    const updatedComplaint=await Complaint.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!updatedComplaint){
        res.status(401);
        throw new Error("Complaint Not Updated");
    }
    res.status(200).json(updatedComplaint);
    res.send("Complaint Updated")
})

const getComments=asyncHandler(async(req,res)=>{
    //lawyer id 
    const lawyerId = req.user._id;

    // Step 1: Lawyer ke clients fetch karo
    const clientRelations = await ClientLawyer.find({ lawyer: lawyerId }).select("client").lean();
    const clientIds = clientRelations.map(entry => entry.client);

    // Step 2: Clients ke complaints fetch karo
    const complaints = await Complaint.find({ user: { $in: clientIds } }).select("_id").lean();
    const complaintIds = complaints.map(c => c._id);

    // Step 3: Un complaints par aaye sabhi comments fetch karo
    const clientComments = await Comment.find({ complaint: { $in: complaintIds } }).lean();

    // Step 4: Lawyer ke apne comments fetch karo
    const lawyerComments = await Comment.find({ client: lawyerId }).lean();
    
    // Step 5: Merge both
    const allComments = [...clientComments, ...lawyerComments];
    if(!allComments){
        res.status(404);
        throw new Error("Comments not found");
    }
    res.status(200).json(allComments);
})

const addComment=asyncHandler(async(req,res)=>{
    const{message}=req.body;
    if(!message){
        res.status(400);
        throw new Error("Please Fill All Details");
    }

    const comment=await Comment.create({client:req.user._id,complaint:req.params.id,message:message,islawyer:true});
    if(!comment){
        res.status(400);
        throw new Error("Comment not created");
    }
    res.status(201).json(comment);
    res.send("Comment added")
})

module.exports={getClients,getComplaints,updateComplaint,getComments,addComment,};