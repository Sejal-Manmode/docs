import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    fileSize : ".9mb", 
    close : true,
    tag : {isOpen : true, tagTitle : "Download Now", tagColor: "green"}
    },
    {
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    fileSize : ".9mb", 
    close : false,
    tag : {isOpen : false, tagTitle : "Download Now", tagColor: "blue"}
    },
    {
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    fileSize : ".9mb", 
    close : true,
    tag : {isOpen : true, tagTitle : "Download Now", tagColor: "blue"}
    },
    {
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    fileSize : ".9mb", 
    close : true,
    tag : {isOpen : true, tagTitle : "Download Now", tagColor: "green"}
    },
    {
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    fileSize : ".9mb", 
    close : true,
    tag : {isOpen : false, tagTitle : "Download Now", tagColor: "blue"}
    },
    {
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    fileSize : ".9mb", 
    close : true,
    tag : {isOpen : true, tagTitle : "Download Now", tagColor: "blue"}
    }
  ]
  
  return (
      <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-5 flex-wrap py-5 px-5'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
      </div>
  )
}

export default Foreground
