const express  = require('express')
const noteRouters = express.Router();

noteRouters.get("/",(req,res)=>{
    res.send("Notes get request");
})

noteRouters.post("/",(req,res)=>{
    res.send("Notes post request");
})

module.exports = noteRouters;