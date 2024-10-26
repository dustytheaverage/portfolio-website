import React from 'react'

function Project({project, classVar}: {project: React.ReactNode, classVar: string}) {

  var hasImage;

  return (
    <div className={classVar}>Project</div>
  )
}

export default Project