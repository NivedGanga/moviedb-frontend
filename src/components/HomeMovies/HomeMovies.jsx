import React, { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList'
import axiosInstance from '../../api/Axios';
import { toast } from 'react-toastify';
import { getAllMovies } from '../../utils/EndPoints';
import { DotLoader } from 'react-spinners';
function HomeMovies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);
    const getMovies = async () => {
        try {
            // localStorage.clear()
            setLoading(true);
            var storedData = localStorage.getItem('favs');
            console.log(storedData)
            // Parse the existing data into an array
            var favmovies = storedData ? JSON.parse(storedData) : [];

            const response = await axiosInstance.get(`${getAllMovies}`);
            let fetchedMovies = response.data.data
            fetchedMovies.forEach(function (movie) {
                // Check if the movie's id already exists in the local storage data
                var existingMovie = favmovies.find(function (item) {
                    return item.id === movie.id;
                });

                // If the movie's id exists, set 'isfav' to true; otherwise, set it to false
                movie.isfav = existingMovie ? true : false;
            });

            setMovies(movies.concat(fetchedMovies))
            setLoading(false)
        } catch (error) {
            toast.error("Something Went Wrong");
        }
    }
    useEffect(() => {
        if (movies.length !== 0) {
            return
        }
        getMovies()
    })
    return (
        <div className='flex flex-col items-start mt-16'>
            <h1 className='text-2xl font-bold mb-9'>Movies</h1>
            <MovieList movies={movies} />
            {
                loading &&
                <div className='w-full flex justify-center mt-14'>
                    <DotLoader color='#FF0158' />
                </div>
            }
        </div>
    )
}

export default HomeMovies
