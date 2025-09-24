import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "motion/react"

const Card = ({data, reference}) => {
  return (
        <motion.div drag dragConstraints={reference} 
        whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{
        bounceStiffness: 100,
        bounceDamping: 30
  }} className='relative shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='mt-5 font-semibold leading-tight'>{data.description}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between mb-3 py-3 px-8'>
          <h5>{data.fileSize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoIosClose/> : <MdOutlineFileDownload size=".7em" color="#fff"/>}
            </span>
          </div>
          {
            data.tag.isOpen && (
              <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div> 
            )
          }
          
        </div>
        </motion.div>
  )
}

export default Card
