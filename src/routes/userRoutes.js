const express = require('express')
const userRouter = express.Router();

userRouter.post("/signup",(req,res)=>{
    res.send("SignUp")
})

userRouter.post("/signin",(req,res)=>{
    res.send("SignIn");
})

module.exports = userRouter;