import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Footerr = () => {
  return (
    <motion.div
    initial={{opacity: 0, y:100}} transition={{duration:.5}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
    id="Footer" className='pt-10 px-4 md:px-20 lg:px-32 overflow-hidden w-full h-auto bg-black'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start mb-10'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo} alt="" />
                <p className='text-white mt-4'>
                    Thank you for choosing Brendonmel Car Care Center — your trusted partner for reliable,
                    affordable, and honest car service. Follow us on social media to stay updated on promos,
                    tips, and announcements.
                </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 mdd:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Brendonmel</h3>
                <ul className='text-gray-400 flex flex-col gap-2'>
                    <a href="#Header" className='hover:text-red-500'>Home</a>
                    <a href="#About" className='hover:text-red-500'>About</a>
                    <a href="#Services" className='hover:text-red-500'>Services</a>
                    <a href="#Contact" className='hover:text-red-500'>Contact Us</a>
                    {/* <a href="#Privacy" className='hover:text-red-500'>Privacy Policy</a> */}
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>
                    Follow our Facebook Page
                </h3>
                <div className='flex flex-row gap-2'>
                    <img src={assets.fb} alt="Brendonmel Facebook" />
                    <a className='text-gray-500 hover:text-blue-500' href="https://www.facebook.com/brendonmel2016/">Brendonmel Car Care Center | Site, Lucena City</a>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-500 py-4 mt-10 text-center text-gray-500'>
            © 2025 Brendonmel Car Care Center. All Rights Reserved.
        </div>
    </motion.div>
  )
}

export default Footerr