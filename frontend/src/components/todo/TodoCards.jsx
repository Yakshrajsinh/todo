import React from 'react'
import { GrDocumentUpdate } from "react-icons/gr";

import { FaTrash } from "react-icons/fa"

const TodoCards = ({title,body,id,delid,display,updateId,toBeUpdate}) => {
  return (
    <div className='p-3 todo-card'>
    <div>
        <h5>{title}</h5>
        <p>{body.split("",77)}</p>
        </div>
        <div className='d-flex justify-content-around '>
        <div className='d-flex justify-content-center align-items-center card-icon-head px-2 p-1'
        onClick={()=>{
          display("block")
          toBeUpdate(updateId)
        }}>
        <GrDocumentUpdate className='card-icons' /> Update</div>
        <div className='d-flex justify-content-center card-icon-head align-items-center px-2 p-1 text-danger' 
        onClick={()=>{
          delid(id) 
        }}>
        <FaTrash className='card-icons del'  /> Delete</div>
        </div>

    </div>
  )
}

export default TodoCards