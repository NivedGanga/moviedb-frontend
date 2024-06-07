import React from 'react'
import HomeCarousel from '../components/Carousel/HomeCarousel'
import HomeMovies from '../components/HomeMovies/HomeMovies'

function Home() {

    return (
        <div className='relative mx-auto mt-24 max-w-common max-md:w-full flex flex-col mb-32'>
            <HomeCarousel />
            <HomeMovies />
        </div>
    )
}

export default Home
