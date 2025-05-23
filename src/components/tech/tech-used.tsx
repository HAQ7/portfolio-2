import Title from "../common/title";
import tools from "@/assets/icons/tools.svg";
import Image from "next/image";
import circle from "@/assets/tech-circle.png";
import TechItem from "./tech-item";
import react from "@/assets/tech-circle-items/react.svg";
import next from "@/assets/tech-circle-items/next.svg";
import tailwind from "@/assets/tech-circle-items/tailwind.svg";
import typescript from "@/assets/tech-circle-items/typescript.svg";
import git from "@/assets/tech-circle-items/git.svg";
import firebase from "@/assets/tech-circle-items/firebase.svg";
import express from "@/assets/tech-circle-items/express.svg";
import postgress from "@/assets/tech-circle-items/postgresql.svg";
import prisma from "@/assets/tech-circle-items/prisma.svg";

export default function TechUsed() {
    return (
        <section className="bg-gradient-to-t from-black via-transparent to-black ">
                <div className="grid place-items-center gap-20 py-32 overflow-hidden">
                    <Title image={tools}>Tech Used</Title>
                    <div className="grid place-items-center relative">
                        <div className="animate-slow-rotate">
                            <TechItem
                                image={firebase}
                                className="absolute top-[50%] left-[-5%] animate-slow-rotate-reverse"
                            />
                            <TechItem
                                image={prisma}
                                className="absolute left-[60%] top-[-3%] animate-slow-rotate-reverse"
                            />
                            <TechItem
                                image={git}
                                className="absolute left-[50%] bottom-[-5%] animate-slow-rotate-reverse"
                            />
                            <TechItem
                                image={next}
                                className="absolute right-[-5%] bottom-[50%] animate-slow-rotate-reverse"
                            />
                            <Image
                                className="w-[80vw] md:w-[70vh] max-w-[600px]"
                                src={circle}
                                alt="a rotating circle"
                            />
                        </div>
                        <div className="absolute animate-slow-rotate-reverse">
                            <TechItem
                                image={typescript}
                                className="absolute top-[60%] right-[-3%] animate-slow-rotate"
                            />
                            <TechItem
                                image={postgress}
                                className="absolute left-[30%] top-[-5%] animate-slow-rotate"
                            />
                            <TechItem
                                image={tailwind}
                                className="absolute left-[30%] bottom-[-6%] animate-slow-rotate"
                            />
                            <Image
                                className="w-[55vw] md:w-[45vh] max-w-[400px]"
                                src={circle}
                                alt="a rotating circle"
                            />
                        </div>
                        <div className="absolute animate-slow-rotate">
                            <TechItem
                                image={react}
                                className="absolute top-[30%] left-[-15%] animate-slow-rotate-reverse"
                            />

                            <TechItem
                                image={express}
                                className="absolute right-0 bottom-[70%] animate-slow-rotate-reverse aspect-square grid place-items-center"
                            />
                            <Image
                                className="w-[30vw] md:w-[20vh] max-w-[200px]"
                                src={circle}
                                alt="a rotating circle"
                            />
                        </div>
                    </div>
                </div>
        </section>
    );
}
