import LoopingBg from "../components/looping-bg";
import Intro from "@/components/intro";
import About from "@/components/about";
import Volunteering from "@/components/volunteering";
import Projects from "@/components/projects/projects";
import TechUsed from "@/components/tech/tech-used";
import Connect from "@/components/connect";
import Cursor from "@/components/cursor";

export default function Portfolio() {
    return (
        <section className="overflow-hidden w-full">
            <LoopingBg img={"SPACE"} />
            <LoopingBg img={"STARS-SMALL"} />
            <LoopingBg img={"STARS-LARGE"} />

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
