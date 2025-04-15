const {  mongoose } = require("mongoose");

const clientLawyerSchema=new mongoose.Schema({
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    clientName:{
        type:String,
        ref:"User",
        required:true,
    },
    lawyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    lawyerName:{
        type:String,
        ref:"User",
        required:true,
    },
},{
    timestamps:true,
})

module.exports=mongoose.model('ClientLawyer',clientLawyerSchema)