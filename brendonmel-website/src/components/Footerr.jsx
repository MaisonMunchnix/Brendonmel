import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Footerr = () => {
  return (
    <motion.div
    initial={{opacity: 0, y:100}} transition={{duration:.5}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
    id="Footer" className='pt-16 px-4 md:px-20 lg:px-32 overflow-hidden w-full h-auto bg-gradient-to-b from-gray-900 to-black'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start mb-12 gap-12'>
            <div className='w-full md:w-1/3'>
                <img src={assets.logo} alt="Brendonmel Logo" className='mb-6' />
                <p className='text-gray-300 leading-relaxed'>
                    Thank you for choosing Brendonmel Car Care Center — your trusted partner for reliable,
                    affordable, and honest car service. Follow us on social media to stay updated on promos,
                    tips, and announcements.
                </p>
            </div>
            <div className='w-full md:w-1/5'>
                <h3 className='text-white text-xl font-bold mb-6'>Quick Links</h3>
                <ul className='text-gray-400 flex flex-col gap-3'>
                    <a href="#Header" className='hover:text-red-500 transition-colors duration-200 hover:translate-x-1 inline-block'>Home</a>
                    <a href="#About" className='hover:text-red-500 transition-colors duration-200 hover:translate-x-1 inline-block'>About</a>
                    <a href="#Services" className='hover:text-red-500 transition-colors duration-200 hover:translate-x-1 inline-block'>Services</a>
                    <a href="#Contact" className='hover:text-red-500 transition-colors duration-200 hover:translate-x-1 inline-block'>Contact Us</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-xl font-bold mb-6'>
                    Connect With Us
                </h3>
                <a 
                    href="https://www.facebook.com/brendonmel2016/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex flex-row items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-200 group p-4 rounded-xl hover:bg-gray-800/50'
                >
                    <div className='bg-blue-600 p-3 rounded-lg group-hover:bg-blue-500 transition-colors'>
                        <img src={assets.fb} alt="Brendonmel Facebook" className='w-6 h-6' />
                    </div>
                    <span className='break-words font-medium'>Brendonmel Car Care Center<br/>Site, Lucena City</span>
                </a>
            </div>
        </div>
        <div className='border-t border-gray-800 py-6 mt-8 text-center'>
            <p className='text-gray-400'>
                © 2025 Brendonmel Car Care Center. All Rights Reserved.
            </p>
        </div>
    </motion.div>
  )
}

export default Footerr