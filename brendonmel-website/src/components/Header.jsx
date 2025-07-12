import React from 'react'
import Navbar from './Navbar';
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'style={{backgroundImage: "url('/brendonmel_bg.png')"}} id='Header'>
        <Navbar/>
        <motion.div
        initial={{opacity: 0, y:100}} transition={{duration:1.5}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
         className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Kung Saan Panatag ang Takbo.</h2>
            <p className='text-5l sm:text-1xl md:text-[20px] mt-3'>Trusted Auto Repair & Maintenance – Fast, Honest, Guaranteed.</p>
            <div className='space-x-6 mt-16'>
                <a href="#Services" className='border border-white px-8 py-3 rounded cursor-pointer hover:bg-red-500 hover:border-transparent'>Services</a>
                <a href="#Contact" className='bg-red-500  px-8 py-3 rounded cursor-pointer  hover:bg-transparent hover:border hover:border-white'>Contact Us</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header