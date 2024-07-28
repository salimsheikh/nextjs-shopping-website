import React from 'react'
import Image from 'react'

interface slidePropsType {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slide:React.FC<slidePropsType> = ({img, title, mainTitle, price}) => {
  return (
    <div className='outline-none border-none relative'>
        <div className="absolute left-[30px] md:left-[70px] mx-w-[250px] sm:max-w-[350px] top-[50px] -translate-x-[50%] space-x-2 lg:space-y-4 bg-[#ffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
            <h3 className='text-accent text-[24ox] lg:text-[28px]'>{title}</h3>
            <Image />
        </div>
    </div>
  )
}

export default Slide;