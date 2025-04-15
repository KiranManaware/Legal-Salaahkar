const {  mongoose, mongo } = require("mongoose");

const commentSchema=new mongoose.Schema(
    {
        client:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        complaint :{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Complaint",
            required:true
        },
        message:{
            type:String,
            required:true
        },
        isLawyer:{
            type:Boolean,
            required:true,
            default:false
        }
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model("Comment",commentSchema)