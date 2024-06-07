import React from 'react'
import { IoPlayCircle } from "react-icons/io5";
function CarouselItem({ name, url, about }) {
    return (
        <div className="relative h-[80vh] max-md:h-[30vh] w-full">
            <div className="absolute h-full w-full bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.60)_100%)]">
            </div>
            <div className='absolute bottom-16 max-md:bottom-4 left-8 flex flex-col w-[30%] max-md:w-10/12'>
                <h1 className='font-semibold max-md:font-bold max-md:mb-2 text-5xl max-md:text-xl text-left text-white mb-5'>
                    {name}
                </h1>
                <p className='text-left text-white mb-6 max-md:mb-1 max-md:text-sm font-medium max-md:line-clamp-2 max-md:line max-md:leading-4'>
                    {about}
                </p>
                <button className='flex items-center px-4 py-2 bg-white rounded-lg w-fit max-md:py-1 max-md:px-2'>
                    <IoPlayCircle size={24} color={"#FF0158"} />
                    <h2 className='text-black font-semibold pl-2 max-md:text-sm max-md:pl-1'>
                        Watch trailer
                    </h2>
                </button>
            </div>
            <img className="object-cover h-full w-full" src={url} alt="" />
        </div>
    )
}

export default CarouselItem
