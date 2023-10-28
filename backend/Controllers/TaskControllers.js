const TaskModel=require("../Model/TaskModels");

module.exports.getTasks = async (req,res)=>{
    const task=await TaskModel.find();
    res.send(task)
    
};

module.exports.saveTask =  (req,res)=>{
    const task=req.body;
    TaskModel.create(task)
    .then((data)=>{
        console.log("Saved Successfully");
        res.status(201).send(data);
    })
    .catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong!"});
    }); 
};

module.exports.updateTask = async (req,res)=>{
    const {id}=req.params;
    const task=req.body;
//    const data= await TaskModel.findById(id)
//          .then((res)=>{
//             console.log(res.data);
//          });
//    console.log(data);
    TaskModel.findByIdAndUpdate(id, task)
    .then(()=>{res.send("Updated succeessfully");
            console.log("Updated!!")   
          })
    .catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong!"});
    }); 
};

module.exports.deleteTask =  (req,res)=>{
    const {id}=req.params;
    const {task}=req.body;
    TaskModel.deleteOne( {"_id": id})

    .then(()=>res.send("Deleted succeessfully"))
    .catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong!"});
    }); 
};

