import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(()=>{
          const storedTheme = localStorage.getItem("theme");
          
       if(storedTheme === "dark"){
              setIsDarkMode(true);
              document.documentElement.classList.add("dark")
            
       }else{
           
            localStorage.setItem('theme','light')
             setIsDarkMode(false)
             
             
       }
       
   },[])
   const themeToggle =()=>{
          if(isDarkMode){
                    document.documentElement.classList.remove("dark")
                    localStorage.setItem('theme','light')
                    setIsDarkMode(false)
          } else{
                   document.documentElement.classList.add("dark") 
                   localStorage.setItem('theme','dark')
                   setIsDarkMode(true)
          }
   }
  return (
    <button onClick={themeToggle} className='fixed top-5 right-5 z-50 p-1 border-1 border-violet-950 sm:p-2 hover:cursor-pointer'>
      {!isDarkMode? <Moon size={20} className='text-gray-800'/> : <Sun size={20} className='text-amber-300'/>}
    </button>
  )
}

export default ThemeToggle
