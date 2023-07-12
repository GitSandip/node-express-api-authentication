const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const USER=process.env.USER;
const PASS=process.env.PASSWORD;

const databaseName = "api_authentication";
const url = `mongodb+srv://${USER}:${PASS}@whatsapp-clone.ia90hil.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

// const url=`mongodb+srv://${USER}:${PASS}@whatsapp-clone.ia90hil.mongodb.net/?retryWrites=true&w=majority`
const Connection=async ()=>{
    try{
        await mongoose.connect(url,{useUnifiedTopology:true});
        console.log("database connected...")
    }catch(e){
        console.log("database..",e.message);

    }
}

module.exports = Connection;