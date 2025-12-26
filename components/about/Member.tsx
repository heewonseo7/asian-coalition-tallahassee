import Image from "next/image";
import { InterFont } from "@/lib/font";

type Member = {
    name: string;
    position: string;
    image: string;
    imageAlt?: string;
    description?: string;
    origin?: string;
}

export default function Member({
    name,
    position,
    image,
    imageAlt = '',
    description,
    origin
}: Member) {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-start mb-8 md:mb-12">
            {/* Image - Consistent sizing */}
            <div className="shrink-0 w-full md:w-64 lg:w-72">
                <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-100">
                    <Image
                        src={image}
                        alt={imageAlt || name}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className={`flex-1 ${InterFont.className} space-y-4`}>
                {/* Name */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {name}
                </h2>

                {/* Position/Title */}
                <p className="text-lg md:text-xl text-gray-700 font-medium">
                    {position}
                </p>

                {/* Origin */}
                {origin && (
                    <p className="text-base text-gray-600">
                        {origin}
                    </p>
                )}

                {/* Description/Biography */}
                {description && (
                    <div className="text-base md:text-lg leading-relaxed text-gray-700 space-y-3">
                        {description.split('\n').map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}