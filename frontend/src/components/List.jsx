import React from 'react';
import '../index.css';
import {BsTrash} from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi";
import axios from 'axios';


const List = ({id,name,reg,email,setUpdateUi,updateMode}) => {

    const removeTask=()=>{
        axios.delete("http://localhost:5000/api/delete/"+`${id}`)
        .then((res)=>{
            console.log(res);
            setUpdateUi((prevState) => !prevState);
        })
        .catch((err)=>{
            console.log(err);
        });
      };


  return (
    // <div>
      <div className="rohu1 row">
         <div className="col-sm">
           {name}
         </div>
         <div className="col-sm">
           {reg}
         </div>
         <div className="col-sm">
           {email}
         </div>
         <div className="col-sm">
            <BiEditAlt className="icon" onClick={()=>updateMode(id,name,reg,email)} />
         </div>
         <div className="col-sm">
            <BsTrash  className="icon" onClick={removeTask}/>
         </div>

    </div>
    
  )
};

export default List;
