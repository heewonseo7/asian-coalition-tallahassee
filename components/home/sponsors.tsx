"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BebasNeueFont, InterFont } from "@/lib/font";

export default function Sponsors() {
    const sponsors = [
        {
            name: "COCA",
            image: "/images/sponsors/coca.png",
        },
        {
            name: "Visit Tallahassee",
            image: "/images/sponsors/visit-tallahassee.png",
        },
        {
            name: "Florida Arts & Culture",
            image: "/images/sponsors/florida-arts-culture.webp",
        },
        {
            name: "City of Tallahassee",
            image: "/images/sponsors/city-of-tallahassee.png",
        }
    ];

    return (
        <section className="w-full px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className={`${BebasNeueFont.className} text-5xl md:text-6xl lg:text-7xl font-bold text-(--color-primary) mb-4 tracking-wide`}>
                    OUR SPONSORS
                </h2>
                <p className={`${InterFont.className} text-lg md:text-xl text-black mb-6`}>If you are interested in sponsoring the festival, please contact us at <a href="mailto:info@asiancoalitiontallahassee.org" className="underline">info@asiancoalitiontallahassee.org</a>.</p>
            </div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.15 }}
                >
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center justify-center"
                        >
                            <div className="relative w-full h-24 md:h-32 lg:h-36 flex items-center justify-center p-4">
                                <Image
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                    width={250}
                                    height={250}
                                    className="object-contain max-w-full max-h-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}