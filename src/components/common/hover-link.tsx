"use client";

import { useHover } from "@/store/isHovering";

export default function HoverLink({
    href,
    className,
    children,
}: {
    href: string;
    className: string;
    children: React.ReactNode;
}) {
    const { setIsHovering } = useHover();
    return (
        <a
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            target="_blank"
            rel="noreferrer"
            className={className}
            href={href}
        >
            {children}
        </a>
    );
}
