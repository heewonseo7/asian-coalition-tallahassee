import Image from "next/image";
import { BebasNeueFont } from "@/lib/font";

type PageHeaderProps = {
    title: string;
    image: string;
    imageAlt?: string;
    height?: "small" | "medium" | "large";
}

export default function PageHeader({
    title,
    image,
    imageAlt = "",
    height = "medium",
}: PageHeaderProps) {
    const heightClasses = {
        small: "h-[40vh]",
        medium: "h-[50vh] md:h-[60vh]",
        large: "h-[60vh] md:h-[70vh]",
    };

    return (
        <>
            <section className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
                {/* Background Image */}
                <Image
                    src={image}
                    alt={imageAlt || title}
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content Overlay */}
                <div className="relative z-10 flex h-full items-center justify-center">
                    <h1 className={`${BebasNeueFont.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white text-center px-6 tracking-wide`}>
                        {title.toUpperCase()}
                    </h1>
                </div>
            </section>
        </>
    );
}

