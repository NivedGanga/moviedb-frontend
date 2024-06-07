import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
function MovieList({ movies, isFavPage }) {
    return (
        <div className='w-full  grid grid-cols-4 max-md:grid-cols-2 gap-y-12 max-md:gap-y-7 gap-x-20 max-md:gap-x-4 place-content-between content-between'>
            {
                movies.map((e) => {
                    return <MovieCard
                        key={e.id}
                        item={e}
                        isFavPage={isFavPage}
                    />
                })
            }
        </div>
    )
}

export default MovieList
