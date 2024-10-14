import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            borderColor: {
                glass: "rgba(255, 255, 255, 0.3)",
            },
            boxShadow: {
                glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
            },
            animation: {
                "bg-scroll-slow":
                    "bg-scroll 80s 2s linear infinite, bg-scroll 2s, opacity 2s forwards",
                "bg-scroll-slow-mobile":
                    "bg-scroll-mobile 80s 2s linear infinite, bg-scroll-mobile 2s, opacity 2s forwards",
                "bg-scroll-fast":
                    "bg-scroll 40s 2s linear infinite, bg-scroll-intro 2s, opacity 2s forwards",
                "bg-scroll-fast-mobile":
                    "bg-scroll-mobile 40s 2s linear infinite, bg-scroll-intro-mobile 2s, opacity 2s forwards",
                "bg-scroll-fastest":
                    "bg-scroll 20s 2s linear infinite, bg-scroll-intro-fast 2s, opacity 2s forwards",
                "bg-scroll-fastest-mobile":
                    "bg-scroll-mobile 20s 2s linear infinite, bg-scroll-intro-fast-mobile 2s, opacity 2s forwards",
                opacity: "opacity 2s forwards",
                typing: "typing 2s 2s steps(40, end) forwards, blink 0.75s 2s 6",
                overflow: "overflow 1s 5s forwards",
                rotate: "rotate 10s linear infinite",
                "cursor-rotate": "rotate 20s linear infinite",
                "cursor-rotate-reverse": "rotate 20s linear infinite reverse",
                "slow-rotate": "rotate 100s linear infinite",
                "slow-rotate-reverse": "rotate 100s linear infinite reverse",
                "typing-nodelay":
                    "typing 1s steps(40, end) forwards, blink 0.75s 4",
                "into-sub-title": "opacity 1s 4s forwards",
                "connect-sub-title":
                    "opacity 1s 1s forwards",
                "slide-right":
                    "slide-right 0.5s 4.5s forwards, opacity 0.5s 4.5s forwards",
            },
            dropShadow: { white: "rgba(255,255,255,0.69) 0px 0px 14px" },
            keyframes: {
                "bg-scroll": {
                    "0%": { backgroundPositionY: "0" },
                    "100%": { backgroundPositionY: "-100vw" },
                },
                "bg-scroll-mobile": {
                    "0%": { backgroundPositionY: "0" },
                    "100%": { backgroundPositionY: "-100vh" },
                },
                rotate: {
                    "0%": { rotate: "0" },
                    "100%": { rotate: "360deg" },
                },
                overflow: {
                    "0%": { overflow: "hidden" },
                    "100%": { overflow: "auto" },
                },
                opacity: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "bg-scroll-intro": {
                    "0%": { backgroundPositionY: "0" },
                    "100%": { backgroundPositionY: "-200vw" },
                },
                "bg-scroll-intro-mobile": {
                    "0%": { backgroundPositionY: "0" },
                    "100%": { backgroundPositionY: "-200vh" },
                },
                "bg-scroll-intro-fast": {
                    "0%": { backgroundPositionY: "0" },
                    "100%": { backgroundPositionY: "-300vw" },
                },
                "bg-scroll-intro-fast-mobile": {
                    "0%": { backgroundPositionY: "0" },
                    "100%": { backgroundPositionY: "-300vh" },
                },
                typing: {
                    from: { width: "0" },
                    to: { width: "100%" },
                },
                blink: {
                    from: { borderColor: "transparent" },
                    "50%": { borderColor: "white" },
                    to: { borderColor: "transparent" },
                },
                "slide-down": {
                    "0%": { transform: "translateY(50px)" },
                    "100%": { transform: "translateY(0)" },
                },
                "slide-right": {
                    "0%": { transform: "translateX(-50px)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
