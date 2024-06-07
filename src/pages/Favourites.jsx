import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList/MovieList'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function Favourites() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const getFavourites = () => {
        let favs = localStorage.getItem("favs")
        let favsArray = favs ? JSON.parse(favs) : [];
        setMovies(favsArray)
    }
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }
    useEffect(() => {
        getFavourites()
    }, [])
    useEffect(() => {
        // Function to search for movies by a keyword in their title
        if (search.length === 0) {
            getFavourites()
            return
        }
        var foundMovies = [];
        for (var i = 0; i < movies.length; i++) {
            if (movies[i].title.toLowerCase().includes(search.toLowerCase())) {
                foundMovies.push(movies[i]);
            }
        }
        setMovies(foundMovies)
    }, [search])
    return (
        <div className='relative mx-auto mt-24 max-w-common flex flex-col mb-32'>
            <div className='mt-20 mb-10 flex justify-between items-center'>
                <div className='flex items-center'>
                    <button
                        className='rounded-full border-[1px] border-black p-2 bg-white'
                        onClick={() => window.history.back()}
                    >
                        <MdOutlineKeyboardArrowLeft size={26} />
                    </button>
                    <h1 className='pl-3 pb-1 text-3xl font-semibold'>
                        My Favourites
                    </h1>
                </div>
                <div className="relative w-1/6 ml-8">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65a7 7 0 111-1 7 7 0 011-1z"></path>
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="pl-10 w-full pr-4 py-[7px] border-2 border-gray-300 focus:border-gray-400 rounded-lg outline-none"
                        placeholder="Search from favourites"
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            {
                movies.length !== 0 ?
                    <MovieList movies={movies} />
                    :
                    <div className='h-full'>
                        <h1 className='text-2xl'>  Oops! No Movies</h1>
                    </div>

            }

        </div >
    )
}

export default Favourites
