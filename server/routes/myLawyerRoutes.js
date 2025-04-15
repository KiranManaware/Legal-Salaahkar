const express=require('express');
const protect=require('../middlewares/authMiddleware');
const asyncHandler = require('express-async-handler');
const router=express.Router();
const ClientLawyer=require('../models/clientLawyerModel');
const User=require('../models/userModel')

//My Lawyer
//ROUTE-> /api/mylawyer
//REQUEST GET
router.get('/',protect,asyncHandler(async(req,res)=>{

    const user= await User.findById(req.user._id);
    if(!user){
        res.status(401);
        throw new Error("Invalid Request");
    }

    // Find the lawyer assigned to this client
    const relation = await ClientLawyer.findOne({ client: user._id });

    if (!relation) {
        res.status(400).send("No lawyer you have");
    }

    // Fetch Lawyer Details
    const lawyer = await User.findById(relation.lawyer);
    if (!lawyer) {
        res.status(404);
        throw new Error("Lawyer Not Found")
    }
    res.status(200).json(lawyer);

}))
module.exports=router;