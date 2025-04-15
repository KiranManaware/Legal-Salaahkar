const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const lawyerProtect = asyncHandler(async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      if (req.user.isLawyer) {
        next();
      } else {
        res.status(401);
        throw new Error("This route is only for lawyer");
      }
    } else {
      res.status(401);
      throw new Error("Unauthorized Access");
    }
  } catch (error) {
    res.status(401);
    throw new Error("This route is only for lawyer");
}
});

module.exports = lawyerProtect;
