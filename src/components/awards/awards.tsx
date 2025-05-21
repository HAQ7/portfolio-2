import Title from "../common/title";
import ScrollAnimationSection from "../common/scroll-animation-section";
import award from "@/assets/icons/award.svg";
import AwardCarousel from "./awards-carousel";

export default function Awards() {
    return (
        <section className=" bg-gradient-to-t from-black via-transparent to-black">
            <ScrollAnimationSection>
                <div className="grid lg:grid-cols-2 lg:gap-0 gap-24 lg:py-0 py-32 min-h-screen place-items-center">
                    <div className="grid place-items-center lg:-order-1 order-1 sm:w-auto w-screen h-full max-h-[800px] border-y-2 border-dashed overflow-hidden relative sm:px-5 ">
                        <AwardCarousel />
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="grid lg:place-items-start place-items-center gap-10">
                            <Title image={award}><span className="sm:text-4xl text-2xl">Achievements</span></Title>
                            <div className="max-w-96 grid gap-3 2xl:text-xl text-lg lg:text-start text-center">
                                <p>
                                    A showcase of milestones and recognitions
                                    I've earned throughout my journey as a
                                    <strong> software engineer </strong> — from
                                    successful projects and hackathon wins to
                                    certifications and impactful contributions
                                    in the tech community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimationSection>
        </section>
    );
}
