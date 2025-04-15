const express=require('express');
const protect = require('../middlewares/authMiddleware');
const { getComplaints, getComplaint, raiseComplaint, updateComplaint } = require('../controllers/complaintController');


const router=express.Router();

// ALL COMPLAINTS
//route-> /api/complaints
router.get('/',protect,getComplaints);

//SINGLE COMPLAINT
//route-> /api/complaints/:id
router.get('/:id',protect,getComplaint);

//RAISE COMPLAINT
//route-> /api/complaints
router.post('/',protect,raiseComplaint);

//UPDATE COMPLAINTS
//route-> /api/complaints/:id
router.put('/:id',protect,updateComplaint);


//Comment Route
//route-> /api/complaints/:id/comments
router.use('/:id/comments',protect,require('./commentRoutes'))



module.exports=router;