// "use client";

// import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function LoopingBg({ img }: { img: string }) {
    // const scrollYProgressIn = useScroll();
    // const spaceMoveSpring = useSpring(scrollYProgressIn.scrollYProgress, {
    //     bounce: 0,
    //     damping: 50
    // });
    // const spaceMove = useTransform(spaceMoveSpring, [0, 1], ["0", "-100vw"]);
    // const smallStarsMove = useTransform(
    //     spaceMoveSpring,
    //     [0, 1],
    //     ["0", "-200vw"]
    // );
    // const largeStarsMove = useTransform(
    //     spaceMoveSpring,
    //     [0, 1],
    //     ["0", "-300vw"]
    // );

    return (
        <div
            // style={{
            //     backgroundPositionY:
            //         img === "SPACE"
            //             ? spaceMove
            //             : img === "STARS-SMALL"
            //             ? smallStarsMove
            //             : largeStarsMove,
            // }}
            className={
                "sm:bg-[length:100vw] bg-cover fixed top-0 h-screen w-screen -z-10 " +
                (img === "SPACE"
                    ? //  sm:animate-bg-scroll-slow animate-bg-scroll-slow-mobile
                      "bg-[url('../assets/looping-backgrounds/space-bg.png')] sm:animate-bg-scroll-slow animate-bg-scroll-slow-mobile"
                    : img === "STARS-SMALL"
                    ? //  sm:animate-bg-scroll-fast animate-bg-scroll-fast-mobile
                      "bg-[url('../assets/looping-backgrounds/stars-small-bg.png')] sm:animate-bg-scroll-fast animate-bg-scroll-fast-mobile"
                    : // sm:animate-bg-scroll-fastest animate-bg-scroll-fastest-mobile
                      "bg-[url('../assets/looping-backgrounds/stars-large-bg.png')] sm:animate-bg-scroll-fastest animate-bg-scroll-fastest-mobile")
            }
        />
    );
}
