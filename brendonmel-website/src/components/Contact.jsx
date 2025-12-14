import React, {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { motion } from "motion/react"
import { assets } from '../assets/assets'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "437afe01-b988-433c-9357-79d1f825ec4d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent! We’ll get back to you as soon as possible.")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div
    initial={{opacity: 0, x:100}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
     id="Contact" className='text-center py-20 px-6 lg:px-32 w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white'>
        <div className='max-w-4xl mx-auto'>
            <div className='mb-12'>
                <h1 className='text-3xl sm:text-5xl font-bold mb-3 text-gray-900'>
                    Get in Touch <span className='text-red-600 underline underline-offset-8 decoration-2'>With Us</span>
                </h1>
                <p className='text-center text-gray-600 text-lg max-w-2xl mx-auto'>Don't Wait—Your Car Deserves Expert Care.</p>
            </div>

            {/* Facebook Messenger Button */}
            <div className='max-w-2xl mx-auto mb-10'>
                <a 
                    href="https://m.me/brendonmel2016" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 w-full sm:w-auto'
                >
                    <img src={assets.fb} alt="Facebook" className='w-6 h-6' />
                    <span>Message us on Facebook Messenger</span>
                </a>
            </div>

            <div className='max-w-2xl mx-auto mb-10 text-center'>
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300'></div>
                    <p className='text-gray-500 text-sm font-medium px-4'>or send us a message below</p>
                    <div className='flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300'></div>
                </div>
            </div>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-100'>
                    <div className='flex flex-wrap gap-4 mb-6'>
                        <div className='w-full md:w-[calc(50%-0.5rem)] text-left'>
                            <label className='block text-gray-700 font-semibold mb-2'>Your Name</label>
                            <input className='w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200 bg-gray-50 focus:bg-white' 
                            type="text" name='Name' placeholder='Enter your name' required />
                        </div>
                        <div className='w-full md:w-[calc(50%-0.5rem)] text-left'>
                            <label className='block text-gray-700 font-semibold mb-2'>Your Email</label>
                            <input className='w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200 bg-gray-50 focus:bg-white'
                            type="email" name='Email' placeholder='Enter your email' required />
                        </div>
                    </div>

                    <div className='mb-6 text-left'>
                        <label className='block text-gray-700 font-semibold mb-2'>Message</label>
                        <textarea className='w-full border-2 border-gray-200 rounded-xl py-3 px-4 h-48 resize-none focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200 bg-gray-50 focus:bg-white' name="Message" placeholder='Write your message here...' required>
                        </textarea>
                    </div>

                    <button type="submit" className='gradient-red text-white py-4 px-12 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto' disabled={result === "Sending...."}>
                        {result ? result : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact