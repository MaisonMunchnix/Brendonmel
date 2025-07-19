import React from 'react'
import { assets } from './../assets/assets';
import { motion } from "motion/react"

const About = () => {
  return (
    <div className='relative' id="About">

        <motion.div 
        initial={{opacity: 0, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
        className='flex flex-col items-center justify-center mx-auto p-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 font-light'>Us</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Para sa Sasakyang Maasahan sa Bawat Byahe.</p>

            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />

                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-1 gap-6 md:gap-10 -w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800 mt-2'>10+</p>
                            <p>Years of Trusted Service</p>
                            <p className='text-4xl font-medium text-gray-800 mt-2'>1k+</p>
                            <p>Happy Car Owners</p>
                            <p className='text-4xl font-medium text-gray-800 mt-2'>46k+</p>
                            <p>Successful Repairs</p>
                            <p className='mt-5 my-10 max-w-lg'>
                                <b>Brendonmel Car Care Center</b> has proudly served the community for almost a decade,
                                earning the trust of hundreds of car owners. With a commitment to quality, honest service,
                                and long-term customer care, we make sure every vehicle that enters our shop leaves in top
                                shape. Whether it’s routine maintenance or major repairs, we’re here to keep you moving—safe,
                                smooth, and stress-free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

        <motion.div 
        initial={{opacity: 0, x:-100}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
        className='w-full text-left relative flex-shrink-0 -z-10 '>
            <img className='sm:block' src={assets.check} alt="" />
        </motion.div>
    </div>
  )
}

export default About