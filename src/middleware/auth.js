const jwt = require('jsonwebtoken');

const SECRET_KEY = "NotesApi"


const auth = (req,res,next)=>{
    try{
        
        let token = req.header.authrization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token,SECRET_KEY);
            req.userId = user.id;

        }
        else{
            res.status(401).json({message:"unauthorized user"})
        }
        next();

    }catch(e){

        res.status(401).json({message:"unauthorized user"})
        
    }
}

module.exports = auth;