import Title from "./common/title";
import volunteerIcon from "@/assets/icons/volunteering.svg";
import Image from "next/image";
import cert from "@/assets/cert-group.png";
import ScrollAnimationSection from "./common/scroll-animation-section";
import circle from "@/assets/tech-circle.png";

export default function Volunteering() {
    return (
        <section className=" bg-gradient-to-t from-black via-transparent to-black">
            <ScrollAnimationSection>
                <div className="grid lg:grid-cols-2 lg:gap-0 gap-24 lg:py-0 py-32  min-h-screen">
                    <div className="grid place-items-center lg:-order-1 order-1 p-5 sm:w-auto w-screen">
                        <Image
                            className="sm:"
                            src={cert}
                            alt="scc certificate and workshop preview"
                        />
                        {/* <div className="animate-slow-rotate">
                            <div
                                className={
                                    "bg-black border-white border rounded-full sm:p-2.5 p-2 overflow-hidden absolute top-[20%] left-[-10%] font-semibold aspect-square grid place-items-center animate-slow-rotate-reverse text-center "
                                }
                            >
                                SCC <br /> Website
                            </div>
                            <div
                                className={
                                    "bg-black border-white border rounded-full sm:p-2.5 p-2 overflow-hidden absolute top-[40%] right-[-10%] font-semibold aspect-square grid place-items-center animate-slow-rotate-reverse text-center "
                                }
                            >
                                Github <br /> Workshop
                            </div>
                            <div
                                className={
                                    "bg-black border-white border rounded-full sm:p-2.5 p-2 overflow-hidden absolute bottom-[-10%] right-[40%] font-semibold aspect-square grid place-items-center animate-slow-rotate-reverse text-center "
                                }
                            >
                                Tech <br /> Team leader
                            </div>
                    

                            <Image
                                className="w-[80vw] md:w-[70vh] max-w-[400px]"
                                src={circle}
                                alt="a rotating circle"
                            />
                        </div> */}
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="grid lg:place-items-start place-items-center gap-10">
                            <Title image={volunteerIcon}>Volunteering</Title>
                            <div className="max-w-96 grid gap-3 2xl:text-xl text-lg lg:text-start text-center">
                                <p>
                                    Technology Lead for the Social Cultural Club
                                    at King Saud University's College of
                                    Computer Science and Information
                                </p>
                                <p>Dedicated 50+ hours to club initiatives.</p>

                                {/* <ul className=" list-inside list-disc lg:text-start text-center">
                            <li>Facilitating a hands-on GitHub workshop</li>
                            <li>
                                Spearheading development of the club's official
                                website
                            </li>
                            <li>
                                Coordinating diverse club events and activities
                            </li>
                        </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimationSection>
        </section>
    );
}
