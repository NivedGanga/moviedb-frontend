import React, { useState, useEffect } from 'react';
import { CgClapperBoard } from 'react-icons/cg';
import { FaHeart } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAllMovies } from '../../utils/EndPoints';
import axiosInstance from '../../api/Axios';
import { toast } from 'react-toastify';
import MovieList from '../MovieList/MovieList';
const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const navigate = useNavigate();
    let path = useLocation()
    const handleSearchChange = async (event) => {
        setSearch(event.target.value);
        if (search.length === 0) {
            return
        }
        try {
            var storedData = localStorage.getItem('favs');
            // Parse the existing data into an array
            var favmovies = storedData ? JSON.parse(storedData) : [];

            const response = await axiosInstance.post(`${getAllMovies}?name=${search}`);
            let fetchedMovies = response.data.data
            fetchedMovies.forEach(function (movie) {
                // Check if the movie's id already exists in the local storage data
                var existingMovie = favmovies.find(function (item) {
                    return item.id === movie.id;
                });

                // If the movie's id exists, set 'isfav' to true; otherwise, set it to false
                movie.isfav = existingMovie ? true : false;
            });
            console.log(fetchedMovies)
            setSearchResults(fetchedMovies)
        } catch (error) {
            toast.error("Something Went Wrong");
        }

    }
    useEffect(() => {
        console.log(search)
    }, [search])
    useEffect(() => {
        if (search.length !== 0) {
            return
        }
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY) {
                // if scroll down, hide the navbar
                setIsVisible(false);
            } else {
                // if scroll up, show the navbar
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div className=' flex flex-col bg-white'>
            <div className={` flex items-center bg-white fixed w-full justify-between px-24 max-md:px-4 py-5 z-[100]  transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='flex items-center w-full max-md:w-fit'>
                    <button className='flex items-center max-md:w-fit' onClick={() => navigate("/")}>
                        <div className='p-3 max-md:p-2  bg-theme w-fit rounded-full flex items-center justify-center'>
                            <CgClapperBoard className='text-white' size={25} />
                        </div>
                        <h1 className='text-2xl max-md:text-lg max-md:text-nowrap pl-3 max-md:pl-1 font-bold max-md:hidden'>
                            GET MOVIES
                        </h1>
                    </button>
                    <div className="relative w-3/6 max-md:w-full ml-8">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65a7 7 0 111-1 7 7 0 011-1z"></path>
                            </svg>
                        </span>
                        <input
                            type="text"
                            className="pl-10 w-full pr-4 py-[7px] border-2 border-gray-300 focus:border-gray-400 rounded-lg outline-none"
                            placeholder="Search movies and series"
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                {
                    path.pathname !== "/favourites" &&
                    <button onClick={() => {
                        setSearch("")
                        navigate("/favourites")
                        }} className='flex  max-md:w-fit items-center px-4 py-2 bg-theme rounded-lg text-white max-md:ml-2'>
                        <FaHeart size={20} />
                        <h2 className='text-nowrap pl-2 max-md:hidden  '>My Favourites</h2>
                    </button>
                }
            </div>
            {
                search.length !== 0 && searchResults.length !== 0 &&
                <div className='fixed h-screen bg-white flex justify-center z-[90] w-full mx-auto  '>
                    <div className='relative overflow-y-auto pt-32'>
                        <MovieList movies={searchResults}></MovieList>
                    </div>
                </div>

            }
        </div>
    );
};

export default Header;
