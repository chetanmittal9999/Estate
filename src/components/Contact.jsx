import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "901e50ac-b67e-4feb-9443-ca4dc8eba561");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult('');
    }
  };


  return (
    <motion.div
    initial={{opacity:0,x:-200}}
    transition={{duration:3}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='flex flex-col justify-center items-center container mx-auto py-14 px-4  md:px-16 lg:px-20 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>Contact <span className='underline underline-offset-4 decoration-1 under font-light text-red-900'>With Us</span></h1>
        <p className='text-gray-600 text-center max-w-100 mb-8'>Ready to make a Move? Let's Build your future together</p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto  text-gray-600 pt-8 shadow-md shadow-black px-10 '>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name 
                    <input className='border w-full border-gray-300 rounded px-4 py-3 mt-2' type="text" name="Name" placeholder='Enter Your Name' id="" required />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email 
                    <input className='border w-full border-gray-300 rounded px-4 py-3 mt-2' type="email" name="Email" placeholder='Enter Email' id="" required />
                </div>
            </div>
            <div className='my-6 text-left'>
                Message
                <textarea className='border w-full border-gray-300 rounded px-4 py-3 mt-2 h-48 resize-none' name="Message" placeholder='Enter Your Message Here...' required></textarea>
            </div>
            <button className='bg-blue-600 text-white px-6 py-2 mb-6 rounded w-full'>
                {result? result:'Send Message'}
            </button>
        </form>
    </motion.div>
  )
}

export default Contact