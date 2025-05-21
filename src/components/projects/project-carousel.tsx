"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

import { project, projects } from "@/components/projects/projects-array";
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
import nestjs from "@/assets/icons/nestjs.svg";
import postgresql from "@/assets/icons/postgresql.svg";
import gpt from "@/assets/icons/openai.svg";
import mistral from "@/assets/icons/mistral.svg";
import fastAPI from "@/assets/icons/fastapi.svg";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SwiperControls from "./swiper-controls";
import VisitButton from "../common/visit-button";

export default function ProjectCarousel() {
    const isInViewRef = useRef({} as HTMLDivElement);
    const swiperRef: any = useRef();
    const isInView = useInView(isInViewRef, {
        margin: "0px 20% 0px 0px",
        once: true,
    });
    if (isInView) {
        swiperRef.current.autoplay.start();
    }

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
            case "NestJS":
                return nestjs;
            case "PostgreSQL":
                return postgresql;
            case "GPT4-0-mini":
                return gpt;
            case "Mixtral-8x22b":
                return mistral;
                case "FastAPI":
                return fastAPI;
        }
    };
    return (
        <div ref={isInViewRef} className="w-full">
            <Swiper
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                onSwiper={swiper => {
                    swiperRef.current = swiper;
                    swiper.autoplay.stop();
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full min-w-0"
            >
                {projects.map((project: project) => (
                    <SwiperSlide key={project.title} className="!w-min">
                        <div className="rounded-2xl backdrop-blur-sm bg-[rgba(255,255,255,0.05)] border-2 border-glass shadow-glass sm:w-[29rem] w-[95vw] max-w-[29rem] p-5 grid place-content-start gap-6 min-h-[20rem] relative z-10 overflow-hidden">
                            <h1 className="font-semibold text-4xl z-10">
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

                            <VisitButton href={project.href} />
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperControls />
            </Swiper>
        </div>
    );
}
