// "use client";

// import { motion } from "framer-motion";

export default function LoopingBg({
    children,
    img,
}: {
    children: React.ReactNode;
    img: string;
}) {

    return (
        <div
            className={
                "sm:bg-[length:100vw] bg-cover " +
                (img === "SPACE"
                    ? "bg-[url('../assets/looping-backgrounds/space-bg.png')] sm:animate-bg-scroll-slow animate-bg-scroll-slow-mobile"
                    : img === "STARS-SMALL"
                    ? "bg-[url('../assets/looping-backgrounds/stars-small-bg.png')] sm:animate-bg-scroll-fast animate-bg-scroll-fast-mobile"
                    : "bg-[url('../assets/looping-backgrounds/stars-large-bg.png')] sm:animate-bg-scroll-fastest animate-bg-scroll-fastest-mobile")
            }
        >
            {children}
        </div>
    );
}
