const express=require('express');
const { getClients, getComplaints, getComments, addComment, updateComplaint} = require('../controllers/lawyerControllers');
const lawyerProtect = require('../middlewares/LawyerMiddleware');
const router=express.Router();

//ALL CLIENTS
//ROUTES-> /api/lawyer/clients
router.get('/clients',lawyerProtect,getClients);

//ALL COMPLAINTS
//ROUTES-> /api/lawyer/complaints
router.get('/complaints',lawyerProtect,getComplaints);


//UPDATE COMPLAINT
//ROUTES-> /api/lawyer/complaints/:id
router.put('/complaints/:id',lawyerProtect,updateComplaint);

//ALL COMMENTS
//ROUTES-> /api/lawyer/comments
router.get('/comments',lawyerProtect,getComments);



//ADD COMMENTS
//ROUTES-> /api/lawyer/:id
router.post('/:id',lawyerProtect,addComment);


module.exports=router;