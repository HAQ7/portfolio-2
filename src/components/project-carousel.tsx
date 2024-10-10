"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

import { project, projects } from "@/projects";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import tailwindcss from "@/assets/icons/tailwindcss.svg";
import nextjs from "@/assets/icons/nextjs.svg";
import firebase from "@/assets/icons/firebase.svg";
import javascript from "@/assets/icons/javascript.svg";
import css from "@/assets/icons/css.svg";
import react from "@/assets/icons/react.svg";
import framerMotion from "@/assets/icons/framer-motion.svg";
import php from "@/assets/icons/php.svg";
import html from "@/assets/icons/html.svg";
import rightArrow from "@/assets/right-arrow.svg";

export default function ProjectCarousel() {
    const getIcon: (tech: string) => StaticImport = (tech: string) => {
        switch (tech) {
            case "TailwindCSS":
                return tailwindcss;
            case "NextJS":
                return nextjs;
            case "Firebase":
                return firebase;
            case "Javascript":
                return javascript;
            case "CSS":
                return css;
            case "ReactJS":
                return react;
            case "Framer Motion":
                return framerMotion;
            case "PHP":
                return php;
            case "HTML":
                return html;
        }
    };
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={30}
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
                loop={true}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full"
            >
                {projects.map((project: project) => (
                    <SwiperSlide key={project.title} className="!w-min">
                        <div className="rounded-2xl backdrop-blur-sm bg-[rgba(255,255,255,0.01)] border-2 border-glass shadow-glass sm:w-[29rem] w-[95vw] max-w-[29rem] font-extralight p-5 grid place-content-start gap-6 min-h-[20rem] relative z-10 overflow-hidden">
                            <h1 className="drop-shadow-white font-normal text-4xl z-10">
                                {project.title}
                            </h1>
                            <div className="gap-4 flex flex-wrap">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="flex justify-center items-center gap-2"
                                    >
                                        <Image
                                            className="w-8"
                                            src={getIcon(tech)}
                                            alt="tech icon"
                                        />
                                        <span className="">{tech}</span>
                                    </span>
                                ))}
                            </div>
                            <p className="text-lg">{project.description}</p>
                            {project.href && (
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="backdrop-blur-sm bg-[rgba(255,255,255,0.05)] border-2 border-glass shadow-glass py-2 px-8 rounded-lg text-center w-min duration-500 flex justify-center items-center gap-2 group mt-5"
                                >
                                    Visit
                                    <span className="w-8 h-8 overflow-hidden grid place-items-center">
                                        <Image
                                            className="w-8 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0 absolute"
                                            src={rightArrow}
                                            alt="arrow icon"
                                        />
                                        <Image
                                            className="w-8 transition-all duration-500 group-hover:translate-x-0 -translate-x-full group-hover:opacity-100 opacity-0 absolute"
                                            src={rightArrow}
                                            alt="arrow icon"
                                        />
                                    </span>
                                </a>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
