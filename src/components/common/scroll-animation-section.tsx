"use client";

import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationSectionProps {
    children: React.ReactNode;
}

export default function scrollAnimationSection({
    children,
}: ScrollAnimationSectionProps) {
    const ref = useRef(null);
    const scrollYProgressIn = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    // const scrollYProgressOut = useScroll({
    //     target: ref,
    //     offset: ["end", "-50vh"],
    // });
    const opacityProgressIn = useTransform(
        scrollYProgressIn.scrollYProgress,
        [0, 0.4, 0.6, 1],
        [0, 1, 1, 0]
    );
    const scaleProgressIn = useTransform(
        scrollYProgressIn.scrollYProgress,
        [0, 0.4, 0.6, 1],
        [1.3, 1, 1, 0.7]
    );

    // const opacityProgressOut = useTransform(scrollYProgressOut.scrollYProgress, [0, 1], [1, 0]);
    // const scaleProgressOut = useTransform(scrollYProgressOut.scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <motion.div
            style={{ opacity: opacityProgressIn, scale: scaleProgressIn }}
            className="relative"
            ref={ref}
        >
            {children}
        </motion.div>
    );
}
