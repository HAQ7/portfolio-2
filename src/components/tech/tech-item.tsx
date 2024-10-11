import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function TechItem({
    image,
    className,
}: {
    image: StaticImport;
    className?: string;
}) {
    return (
        <div className={"bg-black border-white border rounded-full sm:p-2.5 p-1 overflow-hidden " + className}>
            <Image className="sm:w-12 w-8" src={image} alt="tech icon" />
        </div>
    );
}
