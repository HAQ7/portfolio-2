import LoopingBg from "@/components/looping-bg";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects/projects";
import TechUsed from "@/components/tech/tech-used";
import Connect from "@/components/connect";
import Cursor from "@/components/cursor";
import { LoopingBgType } from "@/types/looping-bg-type";
import Awards from "@/components/awards/awards";

export default function Portfolio() {
    return (
        <section className="w-full">
            <LoopingBg bgType={LoopingBgType.SPACE} />
            <LoopingBg bgType={LoopingBgType.STARS_SMALL} />
            <LoopingBg bgType={LoopingBgType.STARS_LARGE} />
            <div className="overflow-hidden w-full">
                <Cursor />
                <Intro />
                <About />
            </div>

            <Awards />

            <div className="overflow-hidden w-full">
                <Projects />
                <TechUsed />
                <Connect />
            </div>
        </section>
    );
}
