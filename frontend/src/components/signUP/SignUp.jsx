import React, { useState } from 'react'
import './signUp.css'
import HeadingComp from './HeadingComp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => { 
  const history=useNavigate()
  const [Inputs,setInputs] = useState({
    email:'',
    username:'',
    password:""
  })
  const change=(e)=>{
    const {name,value}=e.target
    setInputs({...Inputs,[name]:value})
  }
  const submit=async (e)=>{
    e.preventDefault()
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`,Inputs)
    .then((responce)=>{
      console.log("responce",responce)
      if(responce.data.message === "email already exists"){
        alert(responce.data.message)
      }else{     
        alert(responce.data.message)
        setInputs({
          email:'',
          username:'',
          password:""
        })
        history('/signIn')
      }
    })
  } 
  return (
    <div className='signup'>
    <div className='container'> 
        <div className='row'>
            <div className='col-lg-8 collum d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column w-100 p-3'>
                    <input type='email' onChange={change} value={Inputs.email} placeholder='enter your email' className='p-2 form-control my-3 input-signup ' name='email'/>
                    <input type="text" onChange={change} value={Inputs.username} placeholder='enter your username' className='p-2 form-control my-3 input-signup' name='username'/>
                    <input type='password' onChange={change} value={Inputs.password}  placeholder='enter your password' className='p-2 form-control my-3 input-signup' name='password'/>
                    <button className='btn-signup btn .p-2' onClick={submit}>Sign Up</button>
                </div>
            </div>
            <div className='col-lg-4 collum d-lg-flex justify-content-center align-items-center d-none'>
            <HeadingComp first="Sign" second="Up" />
            </div> 
        </div>
    </div>
    </div>
  )
}

export default SignUp
