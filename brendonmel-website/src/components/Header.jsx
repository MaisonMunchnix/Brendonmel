import React from 'react'
import Navbar from './Navbar';
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'style={{backgroundImage: "url('/brendonmel_bg.png')"}} id='Header'>
        {/* Enhanced gradient overlay */}
        <div className='absolute inset-0 gradient-overlay'></div>
        <Navbar/>
        <motion.div
        initial={{opacity: 0, y:100}} transition={{duration:1.5}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
         className='relative z-10 container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <motion.div
            initial={{opacity: 0, scale: 0.9}} transition={{duration:1, delay: 0.2}} whileInView={{opacity:1, scale:1}} viewport={{once:true}}
            className='pt-32 md:pt-40'>
                <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl inline-block max-w-4xl font-bold pt-20 leading-tight drop-shadow-2xl tracking-tight'>
                    Kung Saan <span className='text-red-400'>Panatag</span> ang Takbo.
                </h2>
                <p className='text-lg sm:text-xl md:text-2xl mt-6 mb-8 drop-shadow-lg font-light max-w-2xl mx-auto'>
                    Trusted Auto Repair & Maintenance – Fast, Honest, Guaranteed.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-12'>
                    <a href="#Services" className='group border-2 border-white/90 backdrop-blur-sm bg-white/10 px-10 py-4 rounded-xl cursor-pointer hover:bg-white hover:text-gray-900 hover:border-white hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-white/20'>
                        <span className='flex items-center gap-2'>
                            Our Services
                            <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                            </svg>
                        </span>
                    </a>
                    <a href="#Contact" className='gradient-red px-10 py-4 rounded-xl cursor-pointer hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 font-semibold text-lg text-white shadow-xl'>
                        Get In Touch
                    </a>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Header