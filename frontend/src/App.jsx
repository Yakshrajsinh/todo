import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import About from './components/about/About'
import SignUp from "./components/signUP/SignUp"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SignIn from './components/signUP/SignIn'
import Todo from './components/todo/Todo'
import { useDispatch } from 'react-redux'
import { authActions } from './store'

const App = () => {
  const dispatch =useDispatch()
  useEffect(()=>{
    const id= sessionStorage.getItem("id")
    if(id){
      dispatch(authActions.login())
    }
  })
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route exzact path='/' element={<Home></Home>} />
      <Route exzact path='/about' element={<About></About>} />
      <Route exzact path='/todo' element={<Todo></Todo>} />
      <Route exzact path='/signUp' element={<SignUp></SignUp>} />
      <Route exzact path='/signIn' element={<SignIn></SignIn>} />
      </Routes>
    </Router>
  
    <Footer/>
    </>
  )
}

export default App