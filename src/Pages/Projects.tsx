import React from 'react'
import '../App.css'

function Projects() {
  
  //Variables for setting the next project's css class
  let projClass = 1;
  const projClass1 = 'projectType1';
  const projClass2 = 'projectType2';
  let currentProjClass = '';

  switch (projClass){//decide which css class will be used for the next project
    case 1:
      currentProjClass = projClass1;
      projClass = 2;
      break;
    case 2:
      currentProjClass = projClass2;
      projClass = 1;
      break;
    default:
      projClass = 1;
      break;
  }
  
  return (
    <div>
      <div className = 'projectsPreface'>
        <h1 className='header'>Projects</h1>
        <p className='paragraph'>The following are a collection of projects I have completed, am working on, or am planning on working on that I am proud enough to share with you.
          Some were solo projects, others I was fortunate enough to work alongside individuals with great talents of their own. All of them have led to anecdotes I hold dearly in my
          mind, of plunging towards the depths of insanity before reaching the breakthrough I was looking for, often something mundane yet triumphant all the same. 
          All of them culminate into the reason I continue to develop despite the hardships: that implicit joy of creation for creations sake, regardless of what audience might await. 
          <br/><br/>That being said, I hope you find some of these projects interesting, or amusing at the very least, if not always enjoyable.
        </p>
      </div>
      
      
    </div>
  )
}

export default Projects