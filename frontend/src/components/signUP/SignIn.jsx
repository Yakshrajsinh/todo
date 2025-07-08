import React, { useState } from 'react'
import './signUp.css'
import HeadingComp from './HeadingComp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../../store'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const SignIn = () => {
    const dispatch = useDispatch()
    const history=useNavigate()
    const [Inputs,setInputs]=useState({
        email:"",
        password:""
    })
    const change=(e)=>{
        const {name,value}=e.target
        console.log('value: ', value);
        console.log('name: ', name);
        setInputs({...Inputs,[name]:value})
    }
    const submit=async(e)=>{
        e.preventDefault()
        await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/user/LogIn`,Inputs)
        .then((res)=>{
            if(res.data.message==="user not found" || res.data.message==="your password is incorrect"){
                alert(res.data.message)
            }else{
                sessionStorage.setItem("id",res.data._id)
                dispatch(authActions.login())
                toast.success("Sign in successfull")
                history('/todo')
            }
        })
    }
  return (
    <>
        <div className='signup'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 collum d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column w-100 p-3'>
                    <input type='email' placeholder='enter your email' onChange={change} name="email" value={Inputs.email} className='p-2 form-control my-3 input-signup ' />
                    <input type='password' placeholder='enter your password' onChange={change} name="password" value={Inputs.password} className='p-2 form-control my-3 input-signup' />
                    <button className='btn-signup btn .p-2' onClick={submit}>Sign In</button>
                </div>
            </div>
            <div className='col-lg-4 collum d-lg-flex justify-content-center align-items-center d-none'>
            <HeadingComp first="Sign" second="In" />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default SignIn