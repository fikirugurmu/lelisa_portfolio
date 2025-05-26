import React from 'react'


const ProjectsSection = () => {
   const projects=[
          {title:"PhotoMaths Platform",description:"Tutor on the PhotoMaths platform, helping students solve complex math problems with clear, step-by-step guidance.",image:"/projects/mathsmaster.png"},
          {title:"MathsMaster Platform",description:"Currently working as a math tutor on the MathsMaster platform, providing expert guidance and support in problem-solving.",image:"/projects/photomaths.png"},
   ]
  return (
    <section id='projects' className='max-w-5xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-blue-950'>
               My <span className='text-yellow-500'>Projects</span>     
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
              {projects.map((project,index)=>(
                    <div key={index} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <img src={project.image} alt="" className='object-cover'/>
                        <h3 className='my-8 text-2xl sm:text-3xl text-blue-900 font-semibold'>{project.title}</h3>
                        <p className='text-blue-900 pb-10'>{project.description}</p>
                    </div>
              ))}
          </div>
      
    </section>
  )
}

export default ProjectsSection
