"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { LoopingBgType } from "@/types/looping-bg-type";

export default function LoopingBg({ bgType }: { bgType: LoopingBgType }) {
    const scrollYProgressIn = useScroll();
    const spaceMoveSpring = useSpring(scrollYProgressIn.scrollYProgress, {
        bounce: 0,
        damping: 50,
    });
    const spaceMove = useTransform(spaceMoveSpring, [0, 1], ["0", "-200vh"]);
    const smallStarsMove = useTransform(
        spaceMoveSpring,
        [0, 1],
        ["0", "-250vh"]
    );
    const largeStarsMove = useTransform(
        spaceMoveSpring,
        [0, 1],
        ["0", "-300vh"]
    );

    return (
        <motion.div
            style={{
                y:
                    bgType === LoopingBgType.SPACE
                        ? spaceMove
                        : LoopingBgType.STARS_SMALL
                        ? smallStarsMove
                        : largeStarsMove,
            }}
            className={
                "sm:bg-[length:100vw] bg-[length:100vh] fixed top-0 w-screen -z-10 " +
                (LoopingBgType.SPACE === bgType
                    ? //  sm:animate-bg-scroll-slow animate-bg-scroll-slow-mobile
                      "bg-[url('../assets/looping-backgrounds/space-bg.png')] sm:animate-bg-scroll-slow animate-bg-scroll-slow-mobile h-[300vh]"
                    : LoopingBgType.STARS_SMALL === bgType
                    ? //  sm:animate-bg-scroll-fast animate-bg-scroll-fast-mobile
                      "bg-[url('../assets/looping-backgrounds/stars-small-bg.png')] sm:animate-bg-scroll-fast animate-bg-scroll-fast-mobile h-[350vh]"
                    : // sm:animate-bg-scroll-fastest animate-bg-scroll-fastest-mobile
                      "bg-[url('../assets/looping-backgrounds/stars-large-bg.png')] sm:animate-bg-scroll-fastest animate-bg-scroll-fastest-mobile h-[400vh]")
            }
        />
    );
}
