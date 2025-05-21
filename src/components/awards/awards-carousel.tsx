"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { award, awards } from "./awards-array";

export default function AwardCarousel() {
    return (
        <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            direction={"vertical"}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            modules={[Autoplay, Navigation, EffectCoverflow]}
            className="w-full"
        >
            {awards.map((award: award) => (
                <SwiperSlide key={award.title} className="!w-min">
                    <div className="rounded-2xl backdrop-blur-sm bg-[rgba(255,255,255,0.05)] border-2 border-glass shadow-glass sm:w-[29rem] w-[90vw] max-w-[29rem] gap-6 min-h-[20rem] relative z-10 overflow-hidden">
                        <Image
                            src={award.image}
                            alt={award.title}
                            fill
                            sizes="100%"
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <div className="flex flex-col gap-2 z-10 bg-gradient-to-b to-black h-full absolute justify-end from-transparent p-5">
                            <h1 className="text-2xl font-bold text-white">
                                {award.title}
                            </h1>
                            <p className="text-sm text-gray-400">
                                {award.description}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
