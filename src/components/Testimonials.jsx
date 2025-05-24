import React from 'react'
import { assets, TestimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity:0,y:100}}
    transition={{duration:2}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='container mx-auto py-2 pt-4 mt-4 md:px-2 lg:px-16  w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-center text-gray-600  max-w-80 mb-0 mx-auto'>Real Stories from Those Who Found Home with us .</p>
        <div className='flex flex-col md:flex-row items-center gap-8 justify-center mt-4 px-6'>
            {TestimonialsData.map((testimonial,index)=>(
                <div key={index} className='max-w-[340px]  rounded-tr-4xl rounded-bl-4xl shadow-lg shadow-black px-8 pt-6 pb-4 text-center '>
                    <img className='rounded-tr-4xl rounded-bl-4xl border w-52 h-52 mx-auto mb-2' src={testimonial.image} alt={testimonial.profession} />
                    <h1 className='font-bold text-xl'>{testimonial.name}</h1>
                    <h1 className='font-semibold text-sm text-gray-800'>( {testimonial.profession} )</h1>
                    <div className='flex items-center justify-evenly '>
                        <h1 className='text-xl font-mono text-red-800'>Rating :</h1>
                        <div className='flex gap-1  justify-center'>
                            <img className='w-5' src={assets.star} alt="star" />
                            <img className='w-5' src={assets.star} alt="star" />
                            <img className='w-5' src={assets.star} alt="star" />
                            <img className='w-5' src={assets.star} alt="star" />
                            <img className='w-5' src={assets.star} alt="star" />
                        </div>
                    </div>
                    <h1 className='text-justify mt-2 text-sm text-gray-800'>{testimonial.text}</h1>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials