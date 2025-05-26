import { Briefcase } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative mt-12 mb-12'>
      <div className='container max-w-5xl mx-auto'>
         <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-blue-950'>
               About <span className='text-yellow-500'>Me</span>     
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
                <h3 className='text-2xl font-bold text-blue-950'>
                  Passionate Math Tutor and Electrical Engineer simplifying concepts and empowering real-world problem-solving.</h3>
                  
                  <p className='text-blue-950'>
                     With over four years of experience in math tutoring and electrical engineering,  
                     I specialize in delivering clear, practical instruction and real-world technical solutions.  
                     Combining analytical precision with a passion for teaching, I help learners and projects thrive  
                     through structured, impactful problem-solving.
                   </p>
                  <p className='text-blue-950'>
                      I’m passionate about simplifying complex mathematical ideas and solving real-world 
                      engineering challenges. With a strong foundation in Electrical Engineering, I continually 
                      expand my skill set to teach, inspire, and innovate through practical, impactful learning.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                      <a href="contact" className='bg-yellow-500 py-3 px-10 text-2xl text-blue-900 rounded-full hover:transition-colors duration-300'>
                           Get In Touch
                      </a>
                      <a href="/projects/Lalisa_Math_Tutor_CV.pdf" className='px-6 py-2 rounded-full border text-blue-900 border-yellow-500 hover:bg-yellow-500/10 transition-colors duration-300 text-2xl'>
                           Download CV
                      </a>
                   </div>
            </div>
            <div className='grid grid-cols-1 gap-6'>
                   <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4 '>
                      <div className='p-4 rounded-full bg-primary/10'>
                        <span className='  text-2xl px-2'>∫∫</span>
                      </div>
                      <div className='text-left'>
                              <h4 className='font-semibold text-2xl text-gray-500'>Mathematics Tutoring</h4>
                              <p className='text-gray-500'>Delivering clear, step-by-step math solutions across Algebra, Calculus, Geometry, and more—focused on improving student understanding through digital platforms like PhotoMaths and MathsMaster.

                               </p>
                      </div>
                    </div>
                   </div>
                   <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                      <div className='p-4 rounded-full bg-primary/10'>
                         <span className=' text-gray-500 text-2xl '>n√a</span>
                      </div>
                      <div className='text-left'>
                              <h4 className='font-semibold text-2xl text-gray-500'> Analytical Thinking</h4>
                              <p className='text-gray-500'>Applying structured problem-solving techniques to help students grasp complex mathematical 
                                concepts and develop critical thinking skills.</p>
                      </div>
                    </div>
                   </div>
                   <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-full bg-primary/10'>
                         <Briefcase className='h-8 w-8 text-gray-500'/>
                      </div>
                      <div className='text-left'>
                              <h4 className='font-semibold text-2xl text-gray-500'>Educational Project Support</h4>
                              <p className='text-gray-500'>Guiding students through academic challenges and assignments with a focus on accuracy, clarity, and real-world application in STEM education.</p>
                      </div>
                    </div>
                   </div>
               </div>
          </div>

      </div>
       
    </section>
  )
}

export default AboutSection
