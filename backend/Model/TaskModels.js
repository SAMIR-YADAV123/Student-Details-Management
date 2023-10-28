const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Register:{
        type :String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }  
});

module.exports=mongoose.model("Task",taskSchema);