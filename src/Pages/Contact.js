import React from 'react'
import { motion } from "framer-motion";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className='bg-zinc-900 p-10 rounded-md flex'>
        <div className=''>
          <p className='headspace'>Email</p>
          <input className='outline-none headspace  mr-5 p-2 w-11/12 rounded-md bg-zinc-800' size="21"/>
          <p className='headspace '>Message</p>
          <textarea className='outline-none headspace mr-5 p-2 h-40 w-80 rounded-md bg-zinc-800 resize-none'></textarea>
          <p></p>
          <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className='px-8 bg-zinc-800 p-2 rounded-md text-yellow-200'>Send</motion.button>
        <div>
        
      </div>
        </div>
      
        
      </div>
    </div>
  )
}

export default Contact