import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from "./CarouselItem";

function HomeCarousel() {
    return (
        <div className="w-full h-[80vh] flex justify-center rounded-xl overflow-clip">
            <Carousel swipeable showArrows={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop interval="5000" transitionTime="1000">
                <CarouselItem />
            </Carousel>
        </div>
    )
}

export default HomeCarousel
