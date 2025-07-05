import React from 'react'
import "./home.css"
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate=useNavigate()
  const toTodo=()=>{
    Navigate("/todo")
  }
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className='container d-flex justify-content-center align-items-center flex-column'>
            <h1 className='text-center'>
                Organize your <br/>work and life,finally.
            </h1>
            <p>Become focused, organized, and calm with <br/>todo app. The World's #1 task manager app.</p>
            <button className='home-btn p-2' onClick={toTodo}> make todo list</button>
        </div>
    </div>
  )
}

export default Home