import Title from "./common/title";
import userIcon from "@/assets/icons/user.svg";
import htmlTagIcon from "@/assets/icons/code.svg";
import tooldsIcon from "@/assets/icons/tools.svg";
import timeIcon from "@/assets/icons/time.svg";
import Image from "next/image";
import statsBg from "@/assets/icons/stats.svg";

export default function About() {
    return (
        <section className="grid lg:grid-cols-2 lg:gap-0 gap-24 bg-gradient-to-t from-black via-transparent to-black min-h-screen lg:py-0 py-32">
            <div className="flex flex-col justify-center items-center p-4">
                <div className="grid gap-10 place-items-center lg:place-items-start">
                    <Title image={userIcon}>About me</Title>

                    <div className="max-w-96 grid gap-3 font-extralight 2xl:text-xl text-lg lg:text-start text-center">
                        <p>
                            A King Saud University Software Engineering student
                            passionate in Web development.
                        </p>
                        <p>
                            Awarded the Dean’s Award for Outstanding Academic
                            Excellence.
                        </p>
                        <p>
                            Developed numerous web applications leveraging
                            cutting-edge technologies.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className="grid place-items-center relative">
                    <div className="absolute flex flex-col items-center justify-around h-full text-3xl text-nowrap font-extralight ">
                        <div className="flex flex-col items-center gap-1">
                            <div>+20</div>
                            <div className="font-normal">websites</div>
                            <div>
                                <Image
                                    className="w-14"
                                    src={htmlTagIcon}
                                    alt="website icon"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div>+3</div>
                            <div className="font-normal">Years Web Dev</div>
                            <div>
                                <Image
                                    className="w-14"
                                    src={timeIcon}
                                    alt="exp icon"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div>+10</div>
                            <div className="font-normal">Web Tech</div>
                            <div>
                                <Image
                                    className="w-14"
                                    src={tooldsIcon}
                                    alt="web tech icon"
                                />
                            </div>
                        </div>
                    </div>
                    <Image
                        className="min-w-44 w-[12vw]"
                        src={statsBg}
                        alt="deco"
                    />
                </div>
            </div>
        </section>
    );
}
