
import './index.css';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';



import List from "./components/List"

function App() {
  const [name,setName]=useState("");
  const [reg,setReg]=useState("");
  const [email,setEmail]=useState("");
  const [task,setTasks]=useState([{}]);

  const [updateUi,setUpdateUi]=useState(false);
  const [updateId, setUpdateId]=useState(null);

  
  useEffect(()=>{
    axios.get("http://localhost:5000/api/get")
    .then((res)=>{
      console.log(res.data);
      setTasks(res.data);
    })

},[updateUi]);

  const addTask=(e)=>{
    e.preventDefault();
      const lund={
        Name:name,
        Register:reg,
        Email:email,
      };

    axios({
        method: 'post',
        url: 'http://localhost:5000/api/save',
        data: lund
    })
    .then(function (res) {
        setEmail("");
        setName("");
        setReg("");
        setUpdateUi((prevState)=>!prevState)
        // console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

      console.log(lund);
  };

  const updateMode=(id,name,reg,email)=>{
    // console.log(tname);
    setName(name);
    setEmail(email);
    setReg(reg);
    setUpdateId(id);
};
 
const updateTask=(e)=>{
  e.preventDefault();
  const lund={
    Name:name,
    Register:reg,
    Email:email
  };

axios({
  method: 'put',
  url: "http://localhost:5000/api/update/"+`${updateId}`,
  data: lund
})
.then((res)=> {
    console.log("aaya");
  setUpdateId(null);
  setEmail("");
  setName("");
  setReg("");
  setUpdateUi((prevState)=>!prevState);
})
.catch(function (error) {
  console.log(error);
});
}

  return (
    <main className="App">
       <h1 className="title bg-blue">STUDENT REGISTRATION FORM</h1>
 
 <form className="form">
      <div className="input_field form-group row ">
      <label  className="col-sm-2 col-form-label">NAME :</label>
      <div className="col-sm-10">
         <input type="text" className="form-control"  value={name} onChange={(e)=>setName(e.target.value)}/>
       </div>
     </div>

     <div className=" input_field form-group row">
      <label className="col-sm-2 col-form-label">Reg No :</label>
      <div className="col-sm-10">
         <input type="text" className="form-control" value={reg} onChange={(e)=>setReg(e.target.value)} />
       </div>
     </div>

     <div className="input_field form-group row">
        <label  className="col-sm-2 col-form-label">Email :</label>
        <div className="col-sm-10">
           <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
     </div>

     <button type="submit" onClick={updateId ? updateTask :addTask } > {updateId ? "Update Task" :"Add Task"}</button>

   </form>

        <h1 className="student">STUDENT DETAILS</h1>

    <div className="container">
     <div className="rohu row">
    <div className="col-sm">
      NAME
    </div>
    <div className="col-sm">
      REGISTER
    </div>
    <div className="col-sm">
      EMAIL
    </div>
    <div className="col-sm">
       Update
    </div>
    <div className="col-sm">
      Delete
    </div>
  </div>
</div>
  
  <div className="containerur">
      
   {task.map((task)=> <List Key={task._id} id={task._id} name={task.Name} reg={task.Register} email={task.Email} setUpdateUi={setUpdateUi} updateMode={updateMode}/>)}

  </div>

    </main>
  );
}

export default App;
