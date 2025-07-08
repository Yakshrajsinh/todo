import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Update = ({display,update,fetchTask}) => {
  if(!update) return null
  const [Inputs,setInputs]=useState({
    title:update.title,
    body:update.body
  })
  const change=(e)=>{
      const {name,value} =e.target
      setInputs({...Inputs,[name]:value})
    }
    const submit=async()=>{
      await axios.put(`${process.env.BACKEND_URL}/api/list/updateTask/${update._id}`,Inputs)
      .then(()=>{
        toast.success("your task has been updated");
        fetchTask()
        display("none")
      })
    }
  return (
    <div className='p-5 d-flex justify-content-center align-items-start flex-column'>
        <h3 className=''>Update your task</h3>
        <input type='text' className='todo-inputs w-100 my-4 p-3' value={Inputs.title} name="title" onChange={change} ></input>
        <textarea className='todo-inputs w-100 my-4 p-3' value={Inputs.body} name="body" onChange={change} ></textarea>
        <div>
        <button className='btn btn-dark mx-2' onClick={submit} >Update</button>
        <button className='btn btn-danger mx-2' onClick={()=>display("none")}>Close</button>
        </div>
    </div>
  )
}

export default Update