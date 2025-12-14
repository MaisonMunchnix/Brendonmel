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
    <>
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

              <img src={assets.menu_icon} onClick={() => {setShowMobileMenu(true)}} className='md:hidden w-7 cursor-pointer hover:opacity-80 transition-opacity z-50 relative' alt="Menu" />
          </div>
      </div>
      {/* ----------mobile-menu---------- */}
      {showMobileMenu && (
        <div className='md:hidden fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[100] overflow-y-auto' style={{backgroundColor: 'rgba(0, 0, 0, 0.95)'}}>
          <div className='flex justify-between items-center px-6 py-4 border-b border-gray-800' style={{backgroundColor: 'rgba(0, 0, 0, 0.95)'}}>
            <img src={assets.logo} alt="brendonmel logo" className='h-8' />
            <button 
              onClick={() => {setShowMobileMenu(false)}} 
              className='bg-white/10 hover:bg-white/20 text-white rounded-lg p-3 transition-all duration-200 hover:scale-110 active:scale-95' 
              aria-label="Close menu"
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12'>
            <ul className='flex flex-col items-center gap-6 w-full text-lg font-medium'>
              <a onClick={() => {setShowMobileMenu(false)}} href="#Header" className='text-white hover:text-red-500 px-6 py-4 rounded-lg hover:bg-white/10 transition-all w-full text-center font-semibold'>Home</a>
              <a onClick={() => {setShowMobileMenu(false)}} href="#About" className='text-white hover:text-red-500 px-6 py-4 rounded-lg hover:bg-white/10 transition-all w-full text-center font-semibold'>About</a>
              <a onClick={() => {setShowMobileMenu(false)}} href="#Services" className='text-white hover:text-red-500 px-6 py-4 rounded-lg hover:bg-white/10 transition-all w-full text-center font-semibold'>Services</a>
              <a onClick={() => {setShowMobileMenu(false)}} href="#Contact" className='text-white hover:text-red-500 px-6 py-4 rounded-lg hover:bg-white/10 transition-all w-full text-center font-semibold'>Contact Us</a>
              <a onClick={() => {setShowMobileMenu(false)}} href="https://m.me/brendonmel2016" target="_blank" rel="noopener noreferrer" className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-all w-full text-center font-semibold mt-4 flex items-center justify-center gap-2'>
                <img src={assets.fb} alt="Facebook" className='w-5 h-5' />
                <span>Message on Messenger</span>
              </a>
              <a onClick={() => {setShowMobileMenu(false)}} href="https://www.facebook.com/brendonmel2016/" target="_blank" rel="noopener noreferrer" className='bg-white text-black px-6 py-4 rounded-lg hover:bg-red-500 hover:text-white transition-all w-full text-center font-semibold'>Visit Facebook</a>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar