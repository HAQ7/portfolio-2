import linkedinIcon from "@/assets/icons/linkedin-app-white-icon.svg";
import githubIcon from "@/assets/icons/github-icon.svg";
import Image from "next/image";
import HoverLink from "./common/hover-link";
import cv from '@/assets/icons/cv.svg'

export default function intro() {

    return (
        <section className="grid place-items-center h-screen sm:text-5xl text-4xl bg-gradient-to-t from-black">
            <div className="bg-black fixed w-screen h-screen animate-opacity-rev top-0"/>
            <div className="grid gap-3">
                <h1 className="overflow-hidden animate-typing whitespace-nowrap border-r-2 border-transparent mx-0 mt-auto w-0 font-semibold">
                    Hussam AlQannam
                </h1>
                <div className="flex gap-10">
                    <h2 className="font-thin opacity-0 animate-into-sub-title">
                        Web Dev
                    </h2>
                    <div className="flex gap-3 -translate-x-full opacity-0 animate-slide-right">
                        <HoverLink
                            className="grid place-items-center"
                            href="https://www.linkedin.com/in/hussam-alqannam-9ab206299/"
                        >
                            <Image
                                alt="linkedin icon"
                                className="sm:w-10 w-8 aspect-square hover:scale-110 transition-transform"
                                src={linkedinIcon}
                            />
                        </HoverLink>
                        <HoverLink
                            className="grid place-items-center"
                            href="https://github.com/HAQ7"
                        >
                            <Image
                                alt="github icon"
                                className="sm:w-10 w-8 aspect-square hover:scale-110 transition-transform"
                                src={githubIcon}
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
        </section>
    );
}
