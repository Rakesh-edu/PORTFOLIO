import React from 'react'
import './Home.css';
// import img from './Assets/rakesh.jpg'

const Home = () => {
  return (
    <>
    <div className='Hero'>
        <div className="hero-left">
            <div>
            <h3>Hello,welcome</h3>
            <h1>I m <span className='named'>Rakesh</span></h1>
            <p>I am a <span className='dev'>Full Stack Developer</span>,I am working on it from past 6 months.I built so many real time projects which are user interface and responsiveness.</p>
        </div>
            </div>
        <div className="hero-right">           
                <img src="https://5.imimg.com/data5/KQ/SW/HX/SELLER-83695523/male-model-portfolio-service-1000x1000.jpg" alt="" />           
        </div>
    </div>
      
    </>
  )
}

export default Home
