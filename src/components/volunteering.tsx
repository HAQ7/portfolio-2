import Title from "./common/title";
import volunteerIcon from "@/assets/icons/volunteering.svg";
import Image from "next/image";
import cert from "@/assets/cert-group.png";

export default function Volunteering() {
    return (
        <section className="grid lg:grid-cols-2 lg:gap-0 gap-24 bg-gradient-to-t from-black via-transparent to-black min-h-screen lg:py-0 py-32">
            <div className="grid place-items-center lg:-order-1 order-1">
                <Image src={cert} alt="scc certificate and workshop preview" />
            </div>
            <div className="flex flex-col justify-center items-center p-4">
                <div className="grid  gap-10">
                    <Title image={volunteerIcon}>Volunteering</Title>
                    <div className="max-w-96 grid gap-3 font-extralight 2xl:text-xl text-lg ">
                        <p>
                            Technology Lead for the Social Cultural Club at King
                            Saud University's College of Computer Science and
                            Information
                        </p>
                        <p>
                            Dedicated 50+ hours to club initiatives, including:
                        </p>

                        <ul className=" list-inside list-disc">
                            <li>Facilitating a hands-on GitHub workshop</li>
                            <li>
                                Spearheading development of the club's official
                                website
                            </li>
                            <li>
                                Coordinating diverse club events and activities"
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
