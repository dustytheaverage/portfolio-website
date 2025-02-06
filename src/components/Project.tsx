import React from 'react'
import projectData from './projectData';
// import skullsAndScrollsImage from '../assets/SkullsAndScrollsPoster.png'
// import cryptidSlayerImage from '../assets/cryptidSlayerDemoImage.png'

function ProjectLinks({texts, links}: {texts: string[], links: string[]}){
  let i = -1;
  if(texts.length > 0){
    return(
      <td style={{fontSize: 32}}>Links:{
        links.map(link =>{
        i++;
        return (
          <a href= {link}>{texts[i]}  </a>
        )
      })}</td>
    )
  }
  else{
    return(<td></td>)
  }
}

function Project(project: projectData, classVar: string) {

  var hasImage = false;
  if(project.image != null){
    hasImage = true;
  }

  if(hasImage === true){
    return (
      <div className={classVar} key={project.key}>
        <table className='projectTable'>
          <tbody className='withImage'>
            <tr>
              <th className={'col1'} style={{fontSize: 48}}>{project.title} - {project.type}</th>
              <th className='col2'></th>
            </tr>
            <tr>
              <td style={{fontSize: 32}}>Position - {project.position}</td>
            </tr>
            <tr>
              <td style={{fontSize: 24}} className='col1'>Description: {project.description}</td>
              <td><img src={project.image} /></td>
            </tr>
            <tr>
              <td style={{fontSize: 32}}>Primary Skills: {project.skills}</td>
            </tr>
            <tr>
              <ProjectLinks texts={project.linkNames} links={project.links} />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  else{
    return (
      <div className={classVar} key={project.key}>
        <table className='projectTable'>
          <tbody>
            <tr>
              <th className={'col1'} style={{fontSize: 48}}>{project.title} - {project.type}</th>
              <th className='col2'></th>
            </tr>
            <tr>
              <td style={{fontSize: 32}}>Position - {project.position}</td>
            </tr>
            <tr>
              <td style={{fontSize: 24}}>Description: {project.description}</td>
            </tr>
            <tr>
              <td style={{fontSize: 32}}>Primary Skills: {project.skills}</td>
            </tr>
            <tr>
              <ProjectLinks texts={project.linkNames} links={project.links} />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
}

export default Project