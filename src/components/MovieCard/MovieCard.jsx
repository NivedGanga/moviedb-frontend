import React, {  useState } from 'react'
import { FaHeart } from 'react-icons/fa';
function MovieCard({ item }) {
    const [isfavourite, setFavourite] = useState(item.isfav)
    const favHandle = () => {
        if (!isfavourite) {
            setFavourite(true)
            let favs = localStorage.getItem("favs");
            let favsArray = favs ? JSON.parse(favs) : [];
            item.isfav = true
            favsArray.push(item); // Push the new item into the array
            localStorage.setItem("favs", JSON.stringify(favsArray));

        } else {
            setFavourite(false)
            let favs = localStorage.getItem("favs");

            // Parse the JSON string to an array or initialize an empty array if favs is null
            let favsArray = favs ? JSON.parse(favs) : [];

            // Identify the index of the object you want to remove from the array
            let indexToRemove = favsArray.findIndex(obj => obj.id === item.id);
            console.log(indexToRemove)
            // Check if the index is valid
            if (indexToRemove !== -1) {
                // Remove the object from the array
                favsArray.splice(indexToRemove, 1);

                // Store the updated array back into local storage
                localStorage.setItem("favs", JSON.stringify(favsArray));
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
        <div className='h-[550px] w-[270px] flex flex-col items-start text-left '>
            <div className='relative h-[400px] w-full rounded-xl overflow-clip bg-gray-400 mb-2'>
                {
                    isfavourite ? favButton : notFavButton
                }
                <img className='w-full h-full object-cover' src={item.banner_image} alt="" />
            </div>
            <p className='font-medium text-gray-500'>{item.year}</p>
            <h1 className='text-xl font-semibold'>{item.title}</h1>
            <p className='font-medium text-gray-500'>{item.genre}</p>
        </div>
    )
}

export default MovieCard
