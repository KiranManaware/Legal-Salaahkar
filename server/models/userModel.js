const {  mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    isLawyer:{
        type:Boolean,
        required:true,
    },
},{
    timestamps:true
})

module.exports=mongoose.model('User',userSchema)