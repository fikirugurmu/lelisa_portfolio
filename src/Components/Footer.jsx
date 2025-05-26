import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-black '>
        <div className='text-center py-8 '>
           <h4 className='text-blue-900 text-2xl'>&copy; {new Date().getFullYear()} <span>Lalisa M, All rights reserveed</span></h4>
        </div>
    </footer>
  )
}

export default Footer
