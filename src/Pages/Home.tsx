import React from 'react'
import '../App.css'
import TypewriterComponent from 'typewriter-effect'

function Home() {
  const amA = ['Computer Science Graduate.', 'Software Engineer.', 'Game Developer.', 'Web Developer.', 'Freelancer.'];
  return (
    <div className = 'home'>
      <h1 className='header'>Dustin Anderson</h1>
      <h2 className='subheader'>
        <TypewriterComponent options={{
          strings: amA,
          autoStart: true,
          loop: true
        }}/>
      </h2>
    </div>
  )
}

export default Home