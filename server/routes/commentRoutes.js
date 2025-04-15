const express=require("express");
const protect = require('../middlewares/authMiddleware');
const { getComments,  addComment } = require("../controllers/commentControllers");
const router=express.Router({mergeParams:true})

// All comments
//route-> /api/complaints/:id/comments
router.get('/',protect,getComments);

//Comment Raised
//route-> /api/complaints/:id/comments
router.post('/',protect,addComment);

module.exports=router;