"use client";

import Title from "../common/title";
import awardIcon from "@/assets/icons/award.svg";
import Image from "next/image";
import { award, awards } from "./awards-array";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

export default function Awards() {
    const ref = useRef(null);
    const scrollRef = useRef(null as any);
    const containerRef = useRef(null as any);
    const [maxScroll, setMaxScroll] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    useLayoutEffect(() => {
        const updateMaxScroll = () => {
            if (scrollRef.current && containerRef.current) {
                const scrollHeight = scrollRef.current.scrollHeight;
                const containerHeight = containerRef.current.clientHeight;
                const maxScrollDistance = Math.max(
                    0,
                    scrollHeight - containerHeight + 40
                );
                setMaxScroll(-maxScrollDistance);
            }
        };

        updateMaxScroll();
        window.addEventListener("resize", updateMaxScroll);
        return () => window.removeEventListener("resize", updateMaxScroll);
    }, []);

    const y = useTransform(scrollYProgress, [0, 1], [0, maxScroll]);

    return (
        <section className="bg-gradient-to-t from-black via-transparent to-black z-10">
            <div ref={ref} className="lg:py-0 min-h-screen h-[300vh] relative">
                <div className=" sticky top-0 h-screen flex lg:flex-row flex-col lg:justify-around justify-start items-center pt-5">
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="grid lg:place-items-start place-items-center gap-10">
                            <Title image={awardIcon}>
                                <span className="sm:text-4xl text-2xl">
                                    Achievements
                                </span>
                            </Title>
                            <div className="max-w-96 grid gap-3 2xl:text-xl text-lg lg:text-start text-center">
                                <p>
                                    A showcase of milestones and recognitions
                                    I've earned throughout my journey as a
                                    <strong> software engineer </strong> — from
                                    successful projects and hackathon wins to
                                    certifications and impactful contributions
                                    in the tech community.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={containerRef}
                        className="lg:-order-1 order-1 overflow-hidden lg:flex-none flex-1 border-t-2 lg:border-b-2 border-[#838383] border-dashed h-[60vh] relative p-5"
                    >
                        <motion.div
                            ref={scrollRef}
                            style={{ y }}
                            className="gap-5 flex flex-col"
                        >
                            {awards.map((award: award) => (
                                <div
                                    key={award.title}
                                    className="rounded-2xl backdrop-blur-sm bg-[rgba(255,255,255,0.05)] border-2 border-glass shadow-glass sm:w-[29rem] w-[90vw] max-w-[29rem] gap-6 min-h-[20rem] relative z-10 overflow-hidden"
                                >
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
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
