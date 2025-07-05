import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='about d-flex justify-content-center align-items-center'>
      <div className='container'>
        <div className='d-flex'>
          <h1>About this project</h1>
        </div>
        <p>
          This is a full-stack TODO list application built with the MERN (MongoDB, Express.js, React, Node.js) stack. 
          It allows users to manage their daily tasks effectively with features like task creation, editing, deletion, 
          and user authentication.
        </p>
        <h5 className='mt-3'>How It Works:</h5>
        <ol>
          <li>User signs up and logs in.</li>
          <li>Once authenticated, they can add, update, or delete their tasks.</li>
          <li>All tasks are stored in the database and fetched upon login.</li>
        </ol>
      </div>
    </div>
  )
}

export default About
