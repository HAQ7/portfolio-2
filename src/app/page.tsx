import LoopingBg from "../components/looping-bg";
import Intro from "@/components/intro";

export default function Portfolio() {
    return (
        <LoopingBg img={"SPACE"}>
            <LoopingBg img={"STARS-SMALL"}>
                <LoopingBg img={"STARS-LARGE"}>
                    <Intro />
                </LoopingBg>
            </LoopingBg>
        </LoopingBg>
    );
}
