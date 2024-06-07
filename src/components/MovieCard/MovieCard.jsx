import React, { useContext, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { ValueContext } from '../../pages/Favourites';
function MovieCard({ item, isFavPage }) {
    const [isfavourite, setFavourite] = useState(item.isfav)
    const setFavChanged = useContext(ValueContext);

    const favHandle = () => {
        if (!isfavourite) {
            setFavourite(true)
            let favs = localStorage.getItem("favs");
            let favsArray = favs ? JSON.parse(favs) : [];
            item.isfav = true
            favsArray.push(item);
            localStorage.setItem("favs", JSON.stringify(favsArray));

        } else {
            setFavourite(false)
            let favs = localStorage.getItem("favs");

            let favsArray = favs ? JSON.parse(favs) : [];
            let indexToRemove = favsArray.findIndex(obj => obj.id === item.id);
            if (indexToRemove !== -1) {

                favsArray.splice(indexToRemove, 1);

                localStorage.setItem("favs", JSON.stringify(favsArray));
                if (isFavPage) {
                    setFavChanged.setFavChanged(item.id)
                }

            } else {
                console.log("Object not found in the array.");
            }

        }
        let favs = localStorage.getItem("favs");
        console.log(favs)
    }
    const favButton = <button onClick={() => favHandle()} className='absolute top-4 right-4 p-2 rounded-full bg-[#ffffff]'>
        <FaHeart color={"#FF0158"} />
    </button>
    const notFavButton = <button onClick={() => favHandle()} className='absolute top-4 right-4 p-2 rounded-full bg-[#ffffff3f]'>
        <FaHeart color={"#ffffffee"} />
    </button>
    return (
        <div className='h-[550px] max-md:h-[300px] w-[270px] max-md:w-[150px] flex flex-col items-start text-left '>
            <div className='relative h-[400px] max-md:h-[200px] w-full rounded-xl overflow-clip bg-gray-400 mb-2'>
                {
                    isfavourite ? favButton : notFavButton
                }
                <img className='w-full h-full object-cover' src={item.banner_image} alt="" />
            </div>
            <p className='font-medium max-md:text-sm text-gray-500'>{item.year}</p>
            <h1 className='text-xl max-md:text-lg font-semibold'>{item.title}</h1>
            <p className='font-medium max-md:text-sm text-gray-500'>{item.genre}</p>
        </div>
    )
}

export default MovieCard
