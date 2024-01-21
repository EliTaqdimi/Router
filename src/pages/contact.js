import React, { useState } from 'react'
import './contact.css';


const Contact=()=> {
  const [contact,setContact]= useState(false);
  return (
   <div className='contact'>
    {contact ?
    <>
     <h1>Contact</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore rerum dolor incidunt eaque iure ab architecto, consectetur ducimus nesciunt, aut at saepe fuga corrupti autem? Fugiat quas nobis nulla obcaecati!</p>
    </>: <p>contact is not found</p>
}
      <button className='btn-contact' onClick={()=>setContact(!contact)}>Read More</button>
    </div>
  )
}
export default Contact;