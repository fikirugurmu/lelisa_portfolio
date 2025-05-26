import { Facebook, Instagram, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React from 'react'

const ContactSection = () => {
  return (
    <section id='contact' className='max-w-5xl mx-auto py-5 mb-30'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-blue-950'>
               Contacts <span className='text-yellow-500'>Info</span>     
          </h2>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
                  <div>
                    <div className='space-y-6'>
                    <div className='flex items-start gradient-border p-6 card-hover text-blue-900 space-x-5'>
                              <Mail size={30} className='text-blue-900'/>
                              <span className='text-blue-900 text-2xl'>lalisamegerse@gmail.com</span>
                    </div>
                    <div className='flex items-start gradient-border p-6 card-hover text-blue-900 space-x-5'>
                              <Phone size={30} className='text-blue-900'/>
                              <span className='text-blue-900 text-2xl'>+251914978883</span>
                    </div>
                    <div className='flex items-start gradient-border p-6 card-hover text-blue-900 space-x-5'>
                              <MapPin size={30} className='text-blue-900'/>
                              <span className='text-blue-900 text-2xl'>Sululta & Sebeta, Ethiopia</span>
                    </div>
                    <div className='flex items-start gradient-border p-6 card-hover text-blue-900 space-x-5'>
                              <span className='text-blue-900'>Social</span>
                              <a href="#"><Twitter className='text-blue-900 ' /></a>
                              <a href="#"><Facebook className='text-blue-900 ' /></a>
                              <a href="#"><Instagram className='text-blue-900 ' /></a>
                              
                    </div>

                  </div>
                  </div>
                  <div className="bg-card p-8 rounded-lg shadow-xs">
             <h3 className="text-2xl font-semibold mb-6 text-blue-900">Send a Message</h3>
             <form action="" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-900">Your Name</label>
                  <input type="text" id="name" placeholder="Lalisa Megersa..." required className="w-full px-4 py-3 rounded-md border border-input text-blue-900 focus:outline-hidden focus:ring-2 focus:ring-yellow-500 "/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-900">Your Email</label>
                  <input type="email" id="email" placeholder="example@gmail.com..." required className="w-full px-4 py-3 rounded-md border border-input text-blue-900 focus:outline-hidden focus:ring-2 focus:ring-yellow-500 "/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-900">Your Message</label>
                  <textarea type="text" id="message" placeholder="Hello, I'd like to talk about..." required className="w-full px-4 py-3 rounded-md border border-yellow-500 text-blue-900 focus:outline-hidden focus:ring-2 focus:ring-yellow-500 resize-none"/>
                </div>
                <button className="bg-yellow-500 text-blue-900 text-2xl px-2 py-4 rounded-full w-full flex items-center justify-center gap-2">
                     Send Message
                    <Send size={16}/>    
                </button>
             </form>
          </div>
         </div>
    </section>
  )
}

export default ContactSection
