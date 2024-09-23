import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Hussam AlQannam",
    description:
        "A King Saud University Software Engineering student passionate in Web development. Awarded the Dean’s Award for Outstanding Academic Excellence. Developed numerous web applications leveraging cutting-edge technologies.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
