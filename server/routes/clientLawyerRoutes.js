const express=require('express');
const protect=require('../middlewares/authMiddleware');
const { getLawyers, getLawyer, apointLawyer } = require('../controllers/clientLawyerControllers');
const router=express.Router();

//All Lawyers
//route-> api/client
router.get("/",protect,getLawyers);

//Single Lawyer
//route-> /api/client/:id
router.get("/:id",protect,getLawyer);


//My Lawyer
//route-> /api/client/:id
router.get("/",protect,getLawyer);


//Apoint Lawyer
//route-> /api/client/:id
router.post('/:id',protect,apointLawyer);

module.exports=router;