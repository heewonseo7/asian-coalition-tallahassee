"use client";

import Image from "next/image";
import { BebasNeueFont, InterFont } from "@/lib/font";
import { motion } from "motion/react";

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
        <motion.div 
            className="flex flex-col items-center text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Circular Image */}
            <div className="mb-4 md:mb-6">
                <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-gray-100">
                    <Image
                        src={image}
                        alt={imageAlt || name}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Name */}
            <h2 className={`${BebasNeueFont.className} text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 tracking-wide uppercase`}>
                {name}
            </h2>

            {/* Position/Title */}
            <p className={`${InterFont.className} text-base md:text-lg text-(--color-primary) font-medium uppercase`}>
                {position}
            </p>
        </motion.div>
    );
}