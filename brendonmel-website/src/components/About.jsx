import React from 'react'
import { assets } from './../assets/assets';
import { motion } from "motion/react"

const About = () => {
  return (
    <div className='relative' id="About">

        <motion.div 
        initial={{opacity: 0, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
        className='flex flex-col items-center justify-center mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden bg-gradient-to-b from-white to-gray-50'>
            <div className='text-center mb-12'>
                <h1 className='text-3xl sm:text-5xl font-bold mb-3 text-gray-900'>
                    About <span className='text-red-600 underline underline-offset-8 decoration-2'>Us</span>
                </h1>
                <p className='text-gray-600 text-lg max-w-2xl mx-auto'>Para sa Sasakyang Maasahan sa Bawat Byahe.</p>
            </div>

            <div className='flex flex-col lg:flex-row items-center lg:items-start lg:gap-16 max-w-7xl w-full'>
                <motion.div
                initial={{opacity: 0, x:-50}} transition={{duration:0.8, delay: 0.2}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
                className='w-full lg:w-1/2 mb-10 lg:mb-0'>
                    <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                        <img src={assets.brand_img} alt="Brendonmel Car Care Center" className='w-full h-auto object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                    </div>
                </motion.div>

                <div className='flex flex-col items-center lg:items-start w-full lg:w-1/2'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-10'>
                        <motion.div 
                        initial={{opacity: 0, y:20}} transition={{duration:0.6, delay: 0.3}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
                        className='text-center lg:text-left p-6 rounded-2xl bg-white card-shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100'>
                            <div className='text-5xl md:text-6xl font-bold bg-gradient-to-br from-red-600 to-red-700 bg-clip-text text-transparent mb-2'>10+</div>
                            <p className='text-gray-700 font-semibold'>Years of Trusted Service</p>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, y:20}} transition={{duration:0.6, delay: 0.4}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
                        className='text-center lg:text-left p-6 rounded-2xl bg-white card-shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100'>
                            <div className='text-5xl md:text-6xl font-bold bg-gradient-to-br from-red-600 to-red-700 bg-clip-text text-transparent mb-2'>1k+</div>
                            <p className='text-gray-700 font-semibold'>Happy Car Owners</p>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, y:20}} transition={{duration:0.6, delay: 0.5}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
                        className='text-center lg:text-left p-6 rounded-2xl bg-white card-shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100'>
                            <div className='text-5xl md:text-6xl font-bold bg-gradient-to-br from-red-600 to-red-700 bg-clip-text text-transparent mb-2'>46k+</div>
                            <p className='text-gray-700 font-semibold'>Successful Repairs</p>
                        </motion.div>
                    </div>
                    <motion.div 
                    initial={{opacity: 0, y:20}} transition={{duration:0.8, delay: 0.6}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
                    className='max-w-lg'>
                        <div className='p-6 rounded-2xl bg-white card-shadow border border-gray-100'>
                            <p className='text-gray-700 leading-relaxed text-base md:text-lg'>
                                <span className='font-bold text-gray-900 text-xl'>Brendonmel Car Care Center</span> has proudly served the community for almost a decade,
                                earning the trust of hundreds of car owners. With a commitment to quality, honest service,
                                and long-term customer care, we make sure every vehicle that enters our shop leaves in top
                                shape. Whether it's routine maintenance or major repairs, we're here to keep you moving—safe,
                                smooth, and stress-free.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>

        <motion.div 
        initial={{opacity: 0, x:-100}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
        className='w-full text-left relative flex-shrink-0 -z-10'>
            <img className='w-full h-auto block' src={assets.check} alt="" />
        </motion.div>
    </div>
  )
}

export default About