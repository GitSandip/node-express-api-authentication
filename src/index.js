const express = require('express')
const app = express();
const quotes =require('./quotes.json');
const userRouter = require('./routes/userRoutes');
const noteRouters = require('./routes/noteRoutes');

app.use("/user",userRouter);
app.use("/notes",noteRouters)

app.listen(5000,()=>{
    console.log("server start at port 5000...");
})