const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = asyncHandler(async (req, res) => {
  const { name, email, password, isLawyer } = req.body;

  if (!name || !email || !password || !isLawyer) {
    res.status(400);
    throw new Error("Please Fill All Details");
  }

  // CHECK IF USER ALREADY EXIST
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(200);
    throw new Error("User Already Exist");
  }

  // HASHED PASSWORD
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  //CREATE USER
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    isLawyer,
  });
  if (!user) {
    res.status(400);
    throw new Error("User Not Created");
  }
  res.status(200).json({
    id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    isLawyer: user.isLawyer,
    token: generateToken(user._id),
  });
});
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please Fill All Details");
  }

  // FIND IF USER  EXIST IN DB
  const user = await User.findOne({ email: email });
  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isLawyer: user.isLawyer,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});


const privateController=(req,res)=>{
    res.json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email,
    })
}

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { register, login ,privateController};
