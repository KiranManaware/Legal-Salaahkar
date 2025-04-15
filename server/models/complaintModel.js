const {  mongoose } = require("mongoose");

const complaintSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    caseType:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["open",'closed','pending'],
        required:true,
        default:'open',
    },
    description:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

module.exports=mongoose.model('Complaint',complaintSchema)