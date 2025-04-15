const express=require('express');
const { register, login, privateController } = require('../controllers/authControllers');
const protect = require('../middlewares/authMiddleware');

const router=express.Router();

//ACCESS:PUBLICE
//ROUTE: /api/register
//METHOD: POST
//DESC:REGISTER NEW USER(CLIENT,LAWYER,ADMIN);
router.post('/register',register);     

//ACCESS:PUBLICE
//ROUTE: /api/login
//METHOD: POST
//DESC:lOGIN EXISTING USER
router.post('/login',login);

// PRIVATE ROUTE
router.post('/private',protect,privateController)

module.exports=router
