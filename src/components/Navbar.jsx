import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
      if(mobileMenu){
        document.body.style.overflow='hidden';
      }else{
        document.body.style.overflow='auto';
    }
    return ()=>{
          document.body.style.overflow='auto';
      }
    }, [mobileMenu])
    

  return (
    <div className='absolute left-0 top-0 z-10 w-full '>
        <div className='container mx-auto justify-between flex items-center px-6 py-4 md:px-20 lg:px-28 bg-transparent'>
            <div className='flex items-center'>
                <img className='w-24' src={assets.logo} alt=""/>
                <p className='font-bold ml-[-25px] font-mono'>CMEstate</p>
            </div>
            <ul className='hidden md:flex gap-7 text-black font-semibold '>
                <a href="#Header" className='cursor-pointer '>Home</a>
                <a href="#About" className='cursor-pointer '>About</a>
                <a href="#Projects" className='cursor-pointer '>Projects</a>
                <a href="#Testimonials" className='cursor-pointer '>Testimonials</a>
                {/* <a href="#Contact" className='cursor-pointer '>Contact </a> */}
            </ul>
            <a href="#Contact" className='hidden md:block bg-black text-white px-8 py-2 rounded-full hover:bg-white hover:text-black hover:font-semibold border-2'>Contact</a>

            <img onClick={()=>{setMobileMenu(true)}} className='w-10 md:hidden' src={assets.menu} alt="" />
        </div>
        {/* mobile menu  */}

        <div className={`md:hidden ${mobileMenu? 'fixed w-full':'w-0 h-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=>{setMobileMenu(false)}} src={assets.close_icon} className='w-10 ' alt="" />
            </div>
            <ul className='flex flex-col items-center text-xl font-medium gap-5 mt-16 px-5  '>
                <a onClick={()=>{setMobileMenu(false)}} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={()=>{setMobileMenu(false)}} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={()=>{setMobileMenu(false)}} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={()=>{setMobileMenu(false)}} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
                <a onClick={()=>{setMobileMenu(false)}} href="#Contact" className='px-4 py-2 rounded-full inline-block'>Contact</a>
            </ul>
        </div>

    </div>
  )
}

export default Navbar