import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { tr } from 'framer-motion/client'


const Header = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center w-full  overflow-hidden' style={{backgroundImage:"url('header2.jpg')"} } id='Header'>
        <Navbar/>
        <motion.div 
        initial={{opacity:0,y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='continer text-center mx-auto px-6 py-2 md:px-20 lg:px-3 font-bold'>
          <h2 className='outlined-text text-center md:text-7xl text-4xl text-white mt-[-50px] md:mt-20 font-mono  px-8'>Explore Homes That Make Your Sofa Jealous.</h2>
          <div className='mt-10 space-x-4'>
            <a className='bg-white text-black border-2 px-4 md:px-8 py-3 rounded hover:bg-black hover:text-white ' href="#Projects">Projects</a>
            <a className='bg-black text-white  border-2 px-4 md:px-8 py-3 rounded hover:bg-white hover:text-black ' href="#Contact">Contact Us</a>
          </div>
        </motion.div>
    </div>
  )
}

export default Header