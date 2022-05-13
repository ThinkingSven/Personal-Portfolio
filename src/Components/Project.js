import React from 'react'

function Project({color, language, title, description}) {
  return (
    <div className='p-3 border rounded-lg border-zinc-900' >
      <h3 className='mb-2 text-normal font-medium'>{title}</h3>
      <p className='mb-5 text-sm text-gray-400 font-semibold'>{description}</p>
      <div className='flex'>
        <div  className={`${color} w-3 h-3  rounded-full grid content-center `}>

        <p className='m-4'>{language}</p>
        </div>
      </div>
    </div>
    )
}

export default Project