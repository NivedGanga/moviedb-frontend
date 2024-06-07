import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
function MovieList({ movies, isFavPage }) {
    return (
        <div className='w-full grid grid-cols-4 gap-y-16 gap-x-20 place-content-between content-between'>
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
