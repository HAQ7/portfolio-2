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
            animation: {
                "bg-scroll-slow":
                    "bg-scroll 80s 2s linear infinite, bg-scroll 2s, opacity 2s forwards",
                "bg-scroll-fast":
                    "bg-scroll 40s 2s linear infinite, bg-scroll-intro 2s, opacity 2s forwards",
                "opacity": "opacity 2s forwards",
                "typing": "typing 2s 2s steps(40, end) forwards, blink 0.5s 2s 6",
                "slide-down": "slide-down 1s 4s forwards, opacity 1s 4s forwards",
                "slide-right": "slide-right 0.5s 4.5s forwards, opacity 0.5s 4.5s forwards",
            },
            dropShadow: { white: "rgba(255,255,255,0.69) 0px 0px 14px" },
            keyframes: {
                "bg-scroll": {
                    "0%": { backgroundPositionY: "0" },
                    "100%": { backgroundPositionY: "-100vw" },
                },
                opacity: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "bg-scroll-intro": {
                    "0%": { backgroundPositionY: "0" },
                    "100%": { backgroundPositionY: "-200vw" },
                },
                "typing": {
                    "from": { width: "0" },
                    "to": { width: "100%"}
                },
                "blink": {
                    "from": { borderColor: "transparent" },
                    "50%": { borderColor: "white" },
                    "to": { borderColor: "transparent" }
                },
                "slide-down": {
                    "0%": { transform: "translateY(100%)" },
                    "100%": { transform: "translateY(0)" }
                },
                "slide-right": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" }
                }
            },
        },
    },
    plugins: [],
};
export default config;
