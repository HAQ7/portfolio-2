import LoopingBg from "@/components/looping-bg";
import Intro from "@/components/intro";
import About from "@/components/about";
import Volunteering from "@/components/volunteering";
import Projects from "@/components/projects/projects";
import TechUsed from "@/components/tech/tech-used";
import Connect from "@/components/connect";
import Cursor from "@/components/cursor";
import { LoopingBgType } from "@/types/looping-bg-type";

export default function Portfolio() {
    return (
        <section className="overflow-hidden w-full">
            <LoopingBg bgType={LoopingBgType.SPACE} />
            <LoopingBg bgType={LoopingBgType.STARS_SMALL} />
            <LoopingBg bgType={LoopingBgType.STARS_LARGE} />

            <Cursor />
            <Intro />
            <About />
            <Volunteering />
            <Projects />
            <TechUsed />
            <Connect />
        </section>
    );
}
