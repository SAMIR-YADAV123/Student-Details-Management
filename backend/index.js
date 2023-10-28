const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const routes=require("./routes/TaskRoute");

app.get('/',(req,res)=>{
    res.send("HI guys");
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MONGO DB CONNECTED");
})
.catch((err)=>{
    
      console.log("error aaya");
      console.log(err);
});

app.use("/api",routes);

app.listen(5000,(req,res)=>{
   console.log("listening on 5000 port");
});
