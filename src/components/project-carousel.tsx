"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

export default function ProjectCarousel() {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={40}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                //modules={[EffectCoverflow, Autoplay]}
                modules={[EffectCoverflow]}
                className="w-full"
            >
                <SwiperSlide className="!w-min">
                    <div className="rounded-2xl backdrop-blur-sm bg-[rgba(255, 255, 255, 0.2)] border-2 border-glass shadow-glass w-96 h-96"></div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
