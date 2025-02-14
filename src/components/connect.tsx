"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import linkedin from "@/assets/icons/linkedin-app-white-icon.svg";
import github from "@/assets/icons/github-icon.svg";
import email from "@/assets/icons/email.svg";
import cv from '@/assets/icons/cv.svg'
import HoverLink from "./common/hover-link";
import ScrollAnimationSection from "./common/scroll-animation-section";

export default function Connect() {
    const sectionRef = useRef({} as HTMLElement);
    const isInView: boolean = useInView(sectionRef, {
        margin: "-20% 0px",
        once: true,
    });
    return (
        <section
            ref={sectionRef}
            className="bg-gradient-to-b from-black "
        >
            <ScrollAnimationSection>
            <div className="grid place-items-center min-h-screen sm:text-5xl text-4xl relative">
            <div className="grid gap-1">
                <div className="relative grid items-center text-5xl">
                    <h1
                        className={
                            "absolute overflow-hidden py-1 whitespace-nowrap border-r-2 border-transparent w-0 max-w-min pe-2 font-semibold " +
                            (isInView ? "animate-typing-nodelay" : "")
                        }
                    >
                        Connect
                    </h1>

                    <h1 className="text-transparent p-1 w-min">Connect</h1>
                </div>
                <h2
                    className={
                        "font-thin opacity-0 text-5xl " +
                        (isInView ? "animate-connect-sub-title" : "")
                    }
                >
                    with me
                </h2>
                <div className="flex gap-5 mt-3">
                    <HoverLink
                        className="grid place-items-center"
                        href="https://www.linkedin.com/in/hussam-alqannam-9ab206299/"
                    >
                        <Image
                            alt="linkedin icon"
                            className="w-10 aspect-square hover:scale-110 transition-transform"
                            src={linkedin}
                        />
                    </HoverLink>
                    <HoverLink
                        className="grid place-items-center"
                        href="https://github.com/HAQ7"
                    >
                        <Image
                            alt="github icon"
                            className="w-10 aspect-square hover:scale-110 transition-transform"
                            src={github}
                        />
                    </HoverLink>
                    <HoverLink
                        className="grid place-items-center"
                        href="mailto:hussam.a.qannam@gmail.com"
                    >
                        <Image
                            alt="email icon"
                            className="w-10 aspect-square hover:scale-110 transition-transform"
                            src={email}
                        />
                    </HoverLink>
                    <HoverLink
                        className="grid place-items-center"
                        href="hussamCV.pdf"
                    >
                        <Image
                            alt="cv icon"
                            className="w-10 aspect-square hover:scale-110 transition-transform"
                            src={cv}
                        />
                    </HoverLink>
                </div>
            </div>
            </div>
            </ScrollAnimationSection>
        </section>
    );
}
