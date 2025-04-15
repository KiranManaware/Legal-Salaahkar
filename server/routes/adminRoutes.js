const express=require('express');
const getAllUser = require('../controllers/adminController');
const adminProtect = require('../middlewares/adminMiddleware');
const router=express.Router();

// All users
//Route-> /api/admin/
router.get('/',adminProtect,getAllUser);

module.exports=router;