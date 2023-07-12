const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{timestamps : true})

module.exports = mongoose.model("db_api_note",noteSchema);