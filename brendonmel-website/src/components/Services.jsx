
import React, { useEffect, useState } from 'react';
import { assets, projectsData, servicesData } from './../assets/assets';
import { motion } from "motion/react"

const Services = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setcardsToShow] = useState(1);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in pixels)
    const minSwipeDistance = 50;

    const nextService = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length)
    }
    const prevService = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ?  (servicesData.length - 1) : (prevIndex - 1))
    }

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextService();
        }
        if (isRightSwipe) {
            prevService();
        }
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
    className='mx-auto w-full py-16 px-6 md:px-20 lg:px-32 mb-20 overflow-hidden bg-white' id="Services">
        <div className='text-center mb-12'>
            <h1 className='text-3xl sm:text-5xl font-bold mb-3 text-gray-900'>
                Services <span className='text-red-600 underline underline-offset-8 decoration-2'>Offered</span>
            </h1>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-2'>What We Can Do For Your Car</p>
            <p className='text-gray-500 max-w-2xl mx-auto'>From routine maintenance to major repairs — our expert team is ready to get you back on the road.</p>
        </div>
    
        {/* Navigation Controls */}
        <div className='flex justify-between items-center mb-8 max-w-7xl mx-auto'>
            <div className='flex gap-2'>
                <button onClick={prevService} className='p-3 bg-gray-100 hover:bg-red-500 hover:text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 active:scale-95' aria-label='Previous Service'>
                    <img src={assets.left_arrow} alt="Previous" className='w-5 h-5' />
                </button>
                <button onClick={nextService} className='p-3 bg-gray-100 hover:bg-red-500 hover:text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 active:scale-95' aria-label='Next Service'>
                    <img src={assets.right_arrow} alt="Next" className='w-5 h-5' />
                </button>
            </div>
            {/* Indicator dots for mobile */}
            <div className='flex gap-2 md:hidden'>
                {servicesData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-red-600 w-6' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to service ${index + 1}`}
                    />
                ))}
            </div>
        </div>

        <div className='overflow-hidden max-w-7xl mx-auto'>
            <div 
                className='flex gap-6 lg:gap-8 transition-transform duration-500 ease-in-out' 
                style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {servicesData.map((service, index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 group'>
                        <div className='overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 hover:-translate-y-2'>
                            <div className='relative overflow-hidden rounded-t-2xl'>
                                <img src={service.image} alt={service.service} className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'/>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>
                            <div className='p-6'>
                                <h2 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors'>{service.service}</h2>
                                <p className='text-gray-600 text-sm font-medium'>{service.purpose}</p>
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