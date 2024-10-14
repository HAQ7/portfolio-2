import { useSwiper } from "swiper/react";
import Image from "next/image";
import rightArrow from "@/assets/icons/right-arrow.svg";
import { useState } from "react";
import { useHover } from "@/store/isHovering";

export default function SwiperControls() {
    const {isHovering, setIsHovering} = useHover();
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    swiper.on("reachBeginning", () => {
        setIsBeginning(true);
    });
    swiper.on("fromEdge", () => {
        setIsBeginning(false);
        setIsEnd(false);
    });
    swiper.on("reachEnd", () => {
        setIsEnd(true);
    });

    return (
        <div className="flex gap-2 z-10 mt-5 justify-center items-center">
            <button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={
                    "backdrop-blur-sm transition-opacity bg-[rgba(255,255,255,0.01)] border-2 border-glass shadow-glass rounded-2xl py-2 px-4 group " +
                    (isBeginning ? "opacity-0" : "opacity-100")
                }
                onClick={() => swiper.slidePrev()}
            >
                <Image
                    className="w-10 rotate-180 aspect-square transition-transform group-hover:scale-110"
                    src={rightArrow}
                    alt="right arrow"
                />
            </button>
            <button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={
                    "backdrop-blur-sm transition-opacity bg-[rgba(255,255,255,0.01)] border-2 border-glass shadow-glass rounded-2xl py-2 px-4 group " +
                    (isEnd ? "opacity-0" : "opacity-100")
                }
                onClick={() => swiper.slideNext()}
            >
                <Image
                    className="w-10 aspect-square transition-transform  group-hover:scale-110"
                    src={rightArrow}
                    alt="right arrow"
                />
            </button>
        </div>
    );
}
