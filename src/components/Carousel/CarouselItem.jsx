import React from 'react'
import { IoPlayCircle } from "react-icons/io5";
function CarouselItem() {
    return (
        <div className="relative h-[80vh] w-full">
            <div className="absolute h-full w-full bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.60)_100%)]">
            </div>
            <div className='absolute bottom-16 left-8 flex flex-col w-[30%]'>
                <h1 className='font-semibold text-5xl text-left text-white mb-5'>
                    Spider-Man : Into The Spider Verse
                </h1>
                <p className='text-left text-white mb-6 font-medium'>
                    Spider-Man: Across the Spider-Verse," now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.
                </p>
                <button className='flex items-center px-4 py-2 bg-white rounded-lg w-fit'>
                    <IoPlayCircle size={24} color={"#FF0158"} />
                    <h2 className='text-black font-semibold pl-2'>
                        Watch trailer
                    </h2>
                </button>
            </div>

            <img className="object-cover h-full w-full" src="https://i.abcnewsfe.com/a/ee137d2f-8438-4875-9fd0-7594ac617ce2/spiderman-2-ht-er-230530_1685474847370_hpMain_12x5.jpg" alt="" />
        </div>
    )
}

export default CarouselItem
