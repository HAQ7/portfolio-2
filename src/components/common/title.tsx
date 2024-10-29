"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import glow from "@/assets/icon-glow.png";
import circleIcon from "@/assets/icons/circle.svg";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Title(props: {
    children: React.ReactNode;
    image: StaticImport;
}) {
    const titleRef = useRef({} as HTMLDivElement);
    const isInView: boolean = useInView(titleRef, {
        margin: "-20% 0px",
        once: true,
    });
    return (
        <div ref={titleRef} className="flex gap-4">
            <div className="w-20 grid place-items-center relative">
              <Image
                  src={circleIcon}
                  className="w-[4.4rem] absolute animate-rotate"
                  alt="rotating icon"
              />
                <Image
                    src={glow}
                    className="absolute w-14"
                    alt="title icon glow"
                />
                <Image src={props.image} className="w-12" alt="title icon" />
            </div>
            <div className="relative grid items-center sm:text-5xl text-4xl">
                <h1
                    className={
                        "absolute overflow-hidden py-1 whitespace-nowrap border-r-2 border-transparent w-0 font-semibold  " +
                        (isInView ? "animate-typing-nodelay" : "")
                    }
                >
                    {props.children}
                </h1>

                <h1 className="text-transparent p-1">{props.children}</h1>
            </div>
        </div>
    );
}
