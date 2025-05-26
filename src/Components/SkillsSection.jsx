import React, { useState } from 'react'

const SkillsSection = () => {
  const skills = [
    //Algebra
    {name:"Linear Equations and Inequalities",category:"Algebra"},
    {name:"Quadratic Equations",category:"Algebra"},
    {name:"Matrices and Determinants",category:"Algebra"},
    {name:"Polynomials and Factoring",category:"Algebra"},
    {name:"Systems of Equations",category:"Algebra"},
     //Calculus

     {name:"Limits and Continuity",category:"Calculus"},
     {name:"Derivatives and Applications",category:"Calculus"},
     {name:"Integrals (Definite and Indefinite)",category:"Calculus"},
     {name:"Differential Equations",category:"Calculus"},
     {name:"Optimization Problems",category:"Calculus"},
      
     //Geometry & Trigonometry
     
     {name:"Coordinate Geometry",category:"Geometry & Trigonometry"},
     {name:"Circles, Angles, and Triangles",category:"Geometry & Trigonometry"},
     {name:"Trigonometric Identities and Equations",category:"Geometry & Trigonometry"},
     {name:"3D Geometry and Vectors",category:"Geometry & Trigonometry"},
     {name:"Transformations and Symmetry",category:"Geometry & Trigonometry"},


    
  ]

  const categories = ["All","Algebra","Calculus","Geometry & Trigonometry"];
  const [category, setCategory] = useState("All")
  const handleCategory = ()=>{
    setCategory()
  }
  
  return (
    <section id='skills' className=' max-w-5xl mx-auto mb-12'>
      <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-blue-950'>
               My <span className='text-yellow-500'>Skills</span>     
          </h2>
      <div className='py-3 px-6 flex  justify-center gap-4 sm:gap-6 items-center max-w-3xl mx-auto'>
        {categories.map((categorie,index)=>(
          <div onClick={()=>setCategory(categorie)} key={index} className={`text-blue-900 mb-6 py-2 px-3 rounded-[5px] text-[16px] sm:py-3 sm:px-5 sm:text-[20px] font-semibold hover:cursor-pointer  ${categorie===category ? "bg-amber-500": ""}`}>{categorie}</div>
          
        ))}

        
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 py-5 space-x-6 space-y-6'>
          
              {skills.filter((skills)=>(category==="All" || skills.category===category)).map((skill,index)=>(<div key={index} className='flex items-start gradient-border p-6 card-hover text-blue-900'>
                   {skill.name}
              </div>))}
          
      </div>
        
    </section>
  )
}

export default SkillsSection
