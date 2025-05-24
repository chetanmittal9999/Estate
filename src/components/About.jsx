import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0,x:-200}}
    transition={{duration:3}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='flex flex-col justify-center items-center container mx-auto px-8 py-14 md:px-8 lg:px-12 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-600 text-center max-w-100 mb-8'>Passionate About Properties , Dedicated to your Vision</p>
        <div className='flex flex-col lg:flex-row items-center md:items-start md:gap-20 mt-8'>
            <img src={assets.p5} className='w-full max-w-lg rounded-tl-full rounded-bl-full rounded-tr-full shadow-lg shadow-black' alt="" />
            <div className='flex flex-col items-center md:items-start  text-gray-800 py-5 md:mt-0 lg:ml-0 px-2 md:px-0'>
                <div className='grid grid-cols-2  gap-6 md:gap-10 w-full '>
                    <div>
                        <p className='text-2xl font-medium text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-2xl font-medium text-gray-800'>12+</p>
                        <p>Best Awards Received</p>
                    </div>
                    <div>
                        <p className='text-2xl font-medium text-gray-800'>15+</p>
                        <p>Ongoing Projects</p>
                    </div>
                    <div>
                        <p className='text-2xl font-medium text-gray-800'>18+</p>
                        <p>Projects Completed</p>
                    </div>
                </div>
                <p className='my-5 max-w-lg '>With over a decade of excellence in  estate industry, we are committed to turning your property dreams into reality. Our team brings passion and professionalism to every project.</p>
                <button className='bg-blue-600 text-white px-8 rounded py-2 '>Learn more...</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About