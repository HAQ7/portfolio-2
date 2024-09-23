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
                "bg-[length:100vw] " +
                (img === "SPACE"
                    ? "bg-[url('../assets/looping-backgrounds/space-bg.png')] animate-bg-scroll-slow"
                    : "bg-[url('../assets/looping-backgrounds/stars-small-bg.png')] animate-bg-scroll-fast")
            }
        >
            {children}
        </div>
    );
}
