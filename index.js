const express = require('express');

const app = express();

app.use(express.json());

app.get("/",function(req,res){
    //console.log(req);
    res.send("<h1>hello sy</h1>");
})

const registrationRouter = require("./routes/registration");
app.use('/registration',registrationRouter)

app.listen(3000,()=>{
    console.log("server started on port 3000");
})