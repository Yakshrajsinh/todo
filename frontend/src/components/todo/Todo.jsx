import React, { useEffect, useState } from 'react'
import "./todo.css"
import TodoCards from './TodoCards'
import { ToastContainer, toast } from 'react-toastify';
import Update from './Update';
import axios from 'axios';

const Todo = () => {
    const [userId,setuserId]=useState(null)
    useEffect(()=>{
        const storedId= sessionStorage.getItem("id")
        setuserId(storedId)
    })
    const [toBeUpdateArray,settoBeUpdateArray]=useState(null)
    const update=(value)=>{
        if(userId){
            settoBeUpdateArray(Arrey[value])
            console.log('toBeUpdateArray: ', toBeUpdateArray);
        }else{
            toast.error("please sighUp firs")
        }
    }
     const fetchTask = async()=>{
            await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/list/getTask/${userId}`)
            .then((res)=>{
                setArrey(res.data.list);
            })            
        }
    const show = () => {
        document.getElementById("textarea").style.display = "block"
    }
    const [Inputs, setInputs] = useState({ title: "", body: "" })
    const [Arrey, setArrey] = useState([])
    const change = (e) => {
        const { name, value } = e.target
        setInputs({ ...Inputs, [name]: value })
    }
    const submit = async () => {
        if (Inputs.body === "" || Inputs.title === "") {
            toast.error("Title or Body should not be empty")
        } else {
            if (userId) {
                await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/list/addTask`, {
                    title: Inputs.title,
                    body: Inputs.body,
                    id: userId
                })
                    .then((res) => {
                        console.log('res: ', res);
                        fetchTask()
                    })
                setInputs({ title: "", body: "" })
                toast.success("Your task is added")
            }else{
                 setArrey([...Arrey, Inputs])
                setInputs({ title: "", body: "" })
                toast.success("Your task is added")
                toast.error("Your task is not saved! please Signup ")
            }

        }
    }
    const del = async(cardId) => {
        if(userId){
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/list/deleteTask/${cardId}`,{data:{id:userId}})
        .then(()=>{
            toast.success("Your task is deleted")
            fetchTask()
        })
        }else{
            toast.error("please sighUp first")
        }
       
    }
    const dis = (value) => {
        document.getElementById("todo-update").style.display = value
    }
     useEffect(()=>{
        if(userId) fetchTask()
    },[userId])

    return (
        <>
            <div className='todo'>
                <ToastContainer />
                <div className='todo-main container d-flex justify-content-center align-items-center flex-column'>
                    <div className='d-flex flex-column w-100 p-2 todo-inputs-div'>
                        <input type='text' placeholder='Title' className='my-2 p-2 todo-inputs' onClick={show} onChange={change} name='title' value={Inputs.title} />
                        <textarea type='text' placeholder='Body' className='my-2 todo-inputs p-2 ' id='textarea' onChange={change} name='body' value={Inputs.body} />
                    </div>
                    <div className='w-lg-50 w-100 d-flex justify-content-center my-3'>
                        <button className='home-btn px-2 py-1' onClick={submit}>ADD</button>
                    </div>
                </div>
                <div className='todo-body '>
                    <div className='container-fluid '>
                        <div className='row d-flex justify-content-center'>
                            {Arrey && Arrey.map((item, index) => (
                                <>
                                    <div className='col-lg-3 col-11 mx-3 mx-lg-5 my-2' key={index}>
                                        <TodoCards title={item.title} body={item.body} id={item._id} delid={del} display={dis} updateId={index} toBeUpdate={update} />
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='todo-update ' id='todo-update'>
                <div className='container update'>
                    <Update display={dis} update={toBeUpdateArray} fetchTask={fetchTask} />
                </div>
            </div>
        </>
    )
}

export default Todo 