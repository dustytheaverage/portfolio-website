import React from 'react'

enum State{
  Planned,
  InProgress,
  Complete
}

interface projectData {
  title: string,
  type: string,
  position: string,
  description: string,
  skills: string,
  linkNames: string[],
  links: string[],
  image?: string,
  state: State
}

function Project({project, classVar}: {project: projectData, classVar: string}) {

  var hasImage = false;
  if(project.image != null){
    hasImage = true;
  }

  return (
    <div className={classVar}>Project</div>
  )
}

export default Project