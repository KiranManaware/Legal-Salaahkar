const express = require('express');
const connectDB = require('./config/db_config');
const errorHandler = require('./middlewares/errorHandler');
const lawyerProtect = require('./middlewares/LawyerMiddleware');
const cors=require('cors')

require('dotenv').config();
const app=express();
const PORT=process.env.PORT||2000;

//cors enable
app.use(cors({allwOrigin:"*"}))

// DB CONNECTION
connectDB()

//BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// AUTH ROUTES
app.use('/api',require('./routes/authRoutes'))

// MY LAWYER ROUTES
app.use('/api/mylawyer',require('./routes/myLawyerRoutes'));

//CLINETS ROUTES
app.use('/api/client',require('./routes/clientLawyerRoutes'))

//LAWYER  ROUTES
app.use('/api/lawyer',require('./routes/lawyerRoutes'))

//COMPLAINTS ROUTES
app.use('/api/complaints',require('./routes/complaintRoutes'));

//ADMIN ROUTES
app.use('/api/admin',require('./routes/adminRoutes'));


app.get('/',(req,res)=>{
    res.send("WELCOME TO THE LEAGAL SALAAHKAR");
})




// ERROR HANDLER
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNNING ON PORT : ${PORT}`);
})