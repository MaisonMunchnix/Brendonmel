
import React, { useEffect, useState } from 'react';
import { assets, projectsData, servicesData } from './../assets/assets';
import { motion } from "motion/react"

const Services = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setcardsToShow] = useState(1);

    const nextService = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length)
    }
    const prevService = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ?  (prevIndex.length - 1) : (prevIndex - 1))
    }

    useEffect(() => {
        const updateCardsToShow = ()=>{
            if(window.innerWidth >= 1024){
                setcardsToShow(servicesData.length)
            }
            else{
                setcardsToShow(1)
            }
        };
            updateCardsToShow();

            window.addEventListener('resize', updateCardsToShow);
            return ()=>  window.removeEventListener('resize', updateCardsToShow);
    }, [])

  return (
    <motion.div 
    initial={{opacity: 0, x:-100}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
    className='mx-auto w-full py-4 px-6 md:px-20 lg:px-32 mb-20 overflow-hidden' id="Services">
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Services Offered</h1>
        <h3 className='underline underline-offset-4 decoration-1 font-light mx-auto text-center'>What We Can Do For Your Car</h3>
        <p className='text-gray-500 max-w-100 text-center mb-8 mx-auto'>From routine maintenance to major repairs — our expert team is ready to get you back on the road.</p>
    
        {/* sliderbuttons */}

        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevService} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Service'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button onClick={nextService} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Service'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out' 
                style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
                {servicesData.map((service, index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <img src={service.image} alt={service.service}  className='w-full h-auto mb-14'/>
                        <div className='absolute left-0 right-0  bottom-5 flex justify-center'>
                            <div className='inline-block bg-red-600 w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-xl font-semibold text-white'>{service.service}</h2>
                                <p className='text-black text-sm font-medium'>{service.purpose}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Services