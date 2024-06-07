import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from "./CarouselItem";

function HomeCarousel() {
    const data = [
        {
            "name": "Avengers: Endgame",
            "url": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/04/endgame-chinese-poster.jpg",
            "about": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
        },
        {
            "name": "Spider-Man : Into The Spider Verse",
            "url": "https://i.abcnewsfe.com/a/ee137d2f-8438-4875-9fd0-7594ac617ce2/spiderman-2-ht-er-230530_1685474847370_hpMain_12x5.jpg",
            "about": ` Spider-Man: Across the Spider-Verse," now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.`
        }
    ]
    return (
        <div className="w-full h-[80vh] max-md:h-[30vh] flex justify-center rounded-xl overflow-clip">
            <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop interval="5000" transitionTime="1000">
                {
                    data.map((e) => {
                        return <CarouselItem name={e.name} url={e.url} about={e.about} />
                    })
                }
            </Carousel>
        </div>
    )
}

export default HomeCarousel
