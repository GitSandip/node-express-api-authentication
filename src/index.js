const express = require('express')
const app = express();
const quotes =require('./quotes.json');
const userRouter = require('./routes/userRoutes');
const noteRouters = require('./routes/noteRoutes');
const Connection  = require('./database/db');

app.use(express.json());
app.use("/user",userRouter);
app.use("/notes",noteRouters);


Connection();

app.listen(5000,()=>{
    console.log("server start at port 5000...");
})