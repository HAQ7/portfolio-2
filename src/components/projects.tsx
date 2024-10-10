import Image from "next/image";
import ParticlesBg from "./particles-bg";
import blueGlow from "@/assets/blue-glow.png";
import redGlow from "@/assets/red-glow.png";
import codeIcon from '@/assets/code.svg'
import Title from "./title";
import ProjectCarousel from "./project-carousel";

export default function Projects() {
    return (
        <section className="min-h-screen bg-black relative flex justify-center items-center flex-col gap-28">
            <Image className="absolute right-0 h-full w-auto" src={blueGlow} alt="blue glow"/> 
            <Image className="absolute left-0 h-full w-auto" src={redGlow} alt="red glow"/> 
           <ParticlesBg />
           <Title image={codeIcon}>Projects</Title>
           <ProjectCarousel />
        </section>
    );
}
