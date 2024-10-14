import Image from "next/image";
import rightArrow from "@/assets/icons/right-arrow.svg";
import HoverLink from "./hover-link";

export default function VisitButton({ href }: { href: string }) {
    return (
        <HoverLink
            href={href}
            className="backdrop-blur-sm bg-[rgba(255,255,255,0.05)] border border-glass shadow-glass py-2 px-8 rounded-lg text-center w-min duration-500 flex justify-center items-center gap-2 group mt-5 font-normal"
        >
            <span className="z-10 text-nowrap">Visit Website</span>
            <span className="w-8 h-8 overflow-hidden grid place-items-center">
                <Image
                    className="w-8 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0 absolute"
                    src={rightArrow}
                    alt="arrow icon"
                />
                <Image
                    className="w-8 transition-all duration-500 group-hover:translate-x-0 -translate-x-full group-hover:opacity-100 opacity-0 absolute"
                    src={rightArrow}
                    alt="arrow icon"
                />
            </span>
        </HoverLink>
    );
}
