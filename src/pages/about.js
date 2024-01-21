// import {  Routes, Route } from 'react-router-dom'
// import TestRouter from './testRouter'
import { useState } from 'react'
import './about.css'

const About=()=> {
  const [showData,setShowData]=useState(false);
  return (
    <div className='about'>
      {showData ?
        <>
        <h1>Introduction React</h1>
        <p>The best way to consume React-Bootstrap is via the npm package which you can install with npm (or yarn if you prefer).
          If you plan on customizing the Bootstrap Sass files, or don't want to use a CDN for the stylesheet, it may be helpful to install vanilla Bootstrap as well.</p>
          </>:<p>Not found information</p>
          }
          {/* <Routes>
            <Route path='' element={<TestRouter/>}/>
          </Routes> */}
          <button onClick={()=>setShowData(!showData)} className='btn-about'>Information</button>
    </div>
  )
}

export default About;