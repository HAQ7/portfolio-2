"use client";

import { motion, Spring, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useHover } from "@/store/isHovering";

export default function Cursor() {
    const { isHovering } = useHover();

    const cursorXSmall = useMotionValue(-100);
    const cursorYSmall = useMotionValue(-100);
    const cursorXBig = useMotionValue(-100);
    const cursorYBig = useMotionValue(-100);

    const springConfig: Spring = { bounce: 0, type: "spring" };
    const cursorXSpring = useSpring(cursorXBig, springConfig);
    const cursorYSpring = useSpring(cursorYBig, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorXSmall.set(e.clientX - 14);
            cursorYSmall.set(e.clientY - 14);
            cursorXBig.set(e.clientX - 24);
            cursorYBig.set(e.clientY - 24);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            <motion.div
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                className="fixed z-50 pointer-events-none origin-center lg:grid hidden place-items-center top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            >
                <motion.div
                    animate={isHovering ? { scale: 0.7 } : { scale: 1 }}
                    className="w-12 aspect-square border-2 border-dashed rounded-full animate-cursor-rotate"
                />
            </motion.div>
            <motion.div
                style={{
                    translateX: cursorXSmall,
                    translateY: cursorYSmall,
                }}
                className="fixed z-50 pointer-events-none origin-center lg:grid hidden place-items-center -translate-x-1/2 -translate-y-1/2"
            >
                <motion.div
                    animate={isHovering ? { scale: 0.7 } : { scale: 1 }}
                    className="w-7 aspect-square border-2 border-dashed rounded-full animate-cursor-rotate-reverse"
                />
                <motion.div
                    animate={isHovering ? { opacity: 1 } : { opacity: 0 }}
                    initial={{ opacity: 0 }}
                    className="w-1 aspect-square bg-white rounded-full absolute"
                />
            </motion.div>
        </>
    );
}
