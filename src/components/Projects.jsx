import React, { useEffect, useState } from 'react'
import { assets, projectData } from '../assets/assets'
import { motion } from 'framer-motion'

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(1)

    useEffect(() => {
      const updateCardsToShow=()=>{
        if(window.innerWidth>=1024){
            setCardsToShow(projectData.length)
        }else{
            setCardsToShow(1)
        }
      };
      updateCardsToShow()
      window.addEventListener('resize',updateCardsToShow)
    
      return () => {
        window.removeEventListener('resize',updateCardsToShow)
      }
    }, [])
    

    const nextProject=()=>{
        setCurrentIndex((prevIndex)=>(prevIndex+1 ) % projectData.length)
    }
    const prevProject=()=>{
        setCurrentIndex((prevIndex)=>prevIndex ===0 ? projectData.length-1: prevIndex-1)
    }

  return (
    <motion.div
    initial={{opacity:0,x:-200}}
    transition={{duration:3}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='container mx-auto py-2 pt-10 md:px-8 lg:px-12  w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-600 mx-5  max-w-100 mb-0'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

        {/* Slider icon left and right  */}
        <div className='flex justify-end items-center mb-8 '>
            <button onClick={prevProject} className='border w-6 rounded-bl-full rounded-tl-full   py-3 mr-2 ' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button onClick={nextProject} className='border w-6 rounded-br-full rounded-tr-full  rounded py-3 mr-2 ' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        {/* slider  */}

        <div className='overflow-hidden '>
            <div className='flex gap-2 transition-transform duration-500 ease-in-out mb-10'
            style={{transform:`translateX(-${(currentIndex*102)/cardsToShow}%)`}}>
                {projectData.map((project,index)=>(
                    <div className='relative w-full flex-shrink-0 md:w-1/3 px-5' key={index}>
                        <img className='rounded-tl-4xl rounded-br-4xl w-full h-auto ' src={project.image} alt={project.title} />
                        <div className='absolute left-0 right-0 bottom-0 flex justify-center '>
                            <div className='inline-block bg-white px-4 py-2 shadow-sm shadow-black  text-center '>
                                <h4 className='text-xl md:text-xl font-semibold text-gray-700'>{project.title}</h4>
                                <p className='text-gray-800 text-sm'>{project.price} <span> | </span> {project.location}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    </motion.div>
  )
}

export default Projects