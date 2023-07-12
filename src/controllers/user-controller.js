const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const SECRET_KEY = "NotesApi"


const signup = async (req,res) =>{

    const {username,email,password} = req.body;
    try{
        const existingUser = await userModel.findOne({email: email});
        if(existingUser){
           return res.status(400).json("user alredy exist");
        } 

        const hashedPassword = await bcrypt.hash(password,10);

        const result = await userModel.create({
            email:email,
            password:hashedPassword,
            username:username
        });
        
        const token = jwt.sign({email: result.email, id : result._id }, SECRET_KEY);
        return res.status(201).json({user: result, token: token });

    }catch(e){
        res.status(500).json({message: "something went wrong."});
    }
}

const signin = async(req,res) =>{

    const {username,email,password} = req.body;

    try{
        const existingUser = await userModel.findOne({email: email});
        if(!existingUser){
           return res.status(400).json("user not exist");
        }

        const matchedPassword = await bcrypt.compare(password, existingUser.password);

        if(!matchedPassword){
            return res.status(404).json({message : "Invalid credentials"})
        }

        const token = jwt.sign({email: existingUser.email, id : existingUser._id},SECRET_KEY);

        return res.status(201).json({user: existingUser, token:token})

    }catch(e){
        res.status(500).json({message: "something went wrong."});
    }
}

module.exports = {signup,signin}