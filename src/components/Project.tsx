//import React from 'react'
import projectData from './projectData';

function ProjectLinks({texts, links}: {texts: string[], links: string[]}){
  let i = -1;
  if(texts.length > 0){ //if there is a link, loops through and instantiates all links in the array
    return(
      <td style={{fontSize: 32}}>Links:{
        links.map(link =>{
        i++;
        return (
          <a href= {link} key={i}>{texts[i]}  </a>
        )
      })}</td>
    )
  }
  else{ //if there are no links, returns a blank table item
    return(<td></td>)
  }
}

function Project(project: projectData, classVar: string) {

  var hasImage = false;
  if(project.image != null){
    hasImage = true;
  }

  if(hasImage === true){ //Project Version if project has associated image
    return (
      <div className={classVar} key={project.key}>
        <table className='projectTable' key={project.key}>
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
              <td className='col2'><img src={project.image} /></td>
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
    return ( //Project version for if project has no image
      <div className={classVar} key={project.key}>
        <table className='projectTable' key={project.key}>
          <tbody>
            <tr>
              <th className={'colFulltext'} style={{fontSize: 48}}>{project.title} - {project.type}</th>
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