import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const NavBar = () => {
  const [isMenuCilcked, setIsMenuCilcked] = useState(false);
  const menuClickHandler = ()=>{
          if(isMenuCilcked){
                    setIsMenuCilcked(false)
          }else{
                    setIsMenuCilcked(true)
          }
  }
  const navBarMenus = [
          {name:"Home",href:"#home"},
          {name:"About",href:"#about"},
          {name:"skills",href:"#skills"},
          {name:"Projects",href:"#projects"},
          {name:"Contact",href:"#contact"}
  ]
  
  return (
    <nav className={`flex flex-col  `}   >
          <div className='w-full mt-0 py-5 px-8 flex justify-between items-center'>
           <div className='px-2 py-1 '>
             <h1 className='text-yellow-500 text-2xl font-bold'>Lalisa<span className='text-blue-950'>Portfolio</span></h1>
          </div>
          <div className='flex justify-between items-center mr-10  md:mr-20'>
                    <div className='flex items-center gap-10 '>
                        {navBarMenus.map((navBarMenu,index)=>(
                              <a className='text-[20px] text-blue-950 hover:text-yellow-500/80 hidden md:inline-block' href={navBarMenu.href} key={index}>{navBarMenu.name}</a>
                        ))}
                       
                    </div>
                    <div className='pr-0 md:hidden flex flex-col items-center'>
                       <span onClick={()=>menuClickHandler()}>
                         {isMenuCilcked ? <X size={30} className='hover:text-yellow-500/80 hover:cursor-pointer'/> 
                       : <Menu size={30} className='hover:text-yellow-500/80 hover:cursor-pointer'/>}
                       </span>
                       
                    </div>
          </div>
          </div>
          <div>
                    {isMenuCilcked? 
                          <div className='w-[120px] h-[280px]  flex flex-col bg-black px-16 py-3 flex-start  gap-5 items-center sm:hidden'>
                         {navBarMenus.map((navBarMenu,index)=>(
                              <a onClick={menuClickHandler} className='text-[20px] text-gray-400 hover:text-yellow-500/80 ' key={index} href={navBarMenu.href}>{navBarMenu.name}</a>
                         ))}
                       </div> : ""
                         }
          </div>


       
    </nav>
  )
}

export default NavBar
