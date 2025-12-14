import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  const [activeSection, setActiveSection] = useState('Header');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Header', 'About', 'Services', 'Contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm shadow-md'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 max-w-full'>
            <a href="#Header" className='hover:opacity-80 transition-opacity'>
                <img src={assets.logo} alt="brendonmel logo" className='h-8 md:h-10' />
            </a>
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className={`cursor-pointer transition-colors duration-200 ${activeSection === 'Header' ? 'text-red-500' : 'hover:text-red-500'}`}>Home</a>
                <a href="#About" className={`cursor-pointer transition-colors duration-200 ${activeSection === 'About' ? 'text-red-500' : 'hover:text-red-500'}`}>About</a>
                <a href="#Services" className={`cursor-pointer transition-colors duration-200 ${activeSection === 'Services' ? 'text-red-500' : 'hover:text-red-500'}`}>Services</a>
                <a href="#Contact" className={`cursor-pointer transition-colors duration-200 ${activeSection === 'Contact' ? 'text-red-500' : 'hover:text-red-500'}`}>Contact Us</a>
            </ul>

            <a href="https://www.facebook.com/brendonmel2016/" target="_blank" rel="noopener noreferrer" className='hidden md:block bg-white hover:bg-red-500 text-black hover:text-white px-8 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg'>Visit Us</a>

            <img src={assets.menu_icon} onClick={() => {setShowMobileMenu(true)}} className='md:hidden w-7 cursor-pointer hover:opacity-80 transition-opacity' alt="Menu" />
        </div>
        {/* ----------mobile-menu---------- */}
        <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50 transition-all duration-300 ${showMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className='flex justify-between items-center p-6'>
            <img src={assets.logo} alt="brendonmel logo" className='h-8' />
            <img src={assets.cross_icon} onClick={() => {setShowMobileMenu(false)}} className='w-6 cursor-pointer hover:opacity-80 transition-opacity' alt="Close" />
          </div>
          <ul className='flex flex-col items-center gap-4 mt-10 px-5 text-lg font-medium'>
            <a onClick={() => {setShowMobileMenu(false)}} href="#Header" className='text-white hover:text-red-500 px-4 py-2 rounded-lg hover:bg-white/10 transition-all w-full text-center'>Home</a>
            <a onClick={() => {setShowMobileMenu(false)}} href="#About" className='text-white hover:text-red-500 px-4 py-2 rounded-lg hover:bg-white/10 transition-all w-full text-center'>About</a>
            <a onClick={() => {setShowMobileMenu(false)}} href="#Services" className='text-white hover:text-red-500 px-4 py-2 rounded-lg hover:bg-white/10 transition-all w-full text-center'>Services</a>
            <a onClick={() => {setShowMobileMenu(false)}} href="#Contact" className='text-white hover:text-red-500 px-4 py-2 rounded-lg hover:bg-white/10 transition-all w-full text-center'>Contact Us</a>
            <a onClick={() => {setShowMobileMenu(false)}} href="https://m.me/brendonmel2016" target="_blank" rel="noopener noreferrer" className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all w-full text-center font-semibold mt-2 flex items-center justify-center gap-2'>
              <img src={assets.fb} alt="Facebook" className='w-5 h-5' />
              <span>Message on Messenger</span>
            </a>
            <a onClick={() => {setShowMobileMenu(false)}} href="https://www.facebook.com/brendonmel2016/" target="_blank" rel="noopener noreferrer" className='bg-white text-black px-6 py-3 rounded-lg hover:bg-red-500 hover:text-white transition-all w-full text-center font-semibold'>Visit Facebook</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar