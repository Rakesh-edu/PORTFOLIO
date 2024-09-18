import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <>
    <div className='contact-page'>
      <div className='contact-me'>
        <h2>Contact Me</h2>
        <div>Name:  <input type="text" className='names '/></div>
        <div>Email: <input type="email" className='emails '/></div>
        <div>Cell: <input type="text" className='cells ' /></div>
        <div><button>Submit</button></div>
      </div>
    </div>
    <div >
      <h1 className='text-center'>Lets connect together</h1>
      <h1 className='text-center'>to get more opportunities....</h1>
    </div>
    </>
  )
}

export default Contact
