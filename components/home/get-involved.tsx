"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BebasNeueFont } from "@/lib/font";

export default function GetInvolved() {
    const cards = [
        { 
            name: "VOLUNTEERING", 
            image: "/images/volunteer.png", 
            href: "/get-involved/volunteer" 
        },
        { 
            name: "VENDING", 
            image: "/images/vending.jpg", 
            href: "/get-involved/vending" 
        },
        { 
            name: "PERFORMING", 
            image: "/images/perform.jpg", 
            href: "/get-involved/perform" 
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    return (
        <section className="w-full px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className={`${BebasNeueFont.className} text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 tracking-wide`}>
                    GET INVOLVED!
                </h2>
                <p className="text-lg md:text-xl text-black mb-6">
                    Whether by volunteering, performing, or vending, you too can be a part of our festival!
                </p>
                <div className="w-24 h-1 bg-(--color-primary) mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.name}
                            variants={cardVariants}
                        >
                            <Link href={card.href} className="block">
                                <motion.div
                                    className="relative block w-full overflow-hidden rounded-lg md:rounded-xl h-[300px] md:h-[450px] cursor-pointer"
                                    whileHover="hover"
                                    initial="initial"
                                    variants={{
                                        initial: { scale: 1 },
                                        hover: { scale: 1.02 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <motion.div
                                        className="absolute inset-0"
                                        variants={{
                                            initial: { scale: 1 },
                                            hover: { scale: 1.1 },
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <Image
                                            src={card.image}
                                            alt={card.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                    
                                    <motion.div
                                        className="absolute inset-0 bg-(--color-primary)/60"
                                        variants={{
                                            initial: { opacity: 0.6 },
                                            hover: { opacity: 0.7 },
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 p-6"
                                        variants={{
                                            initial: { y: 0, scale: 1 },
                                            hover: { y: -5, scale: 1.05 },
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <h3 className={`${BebasNeueFont.className} text-3xl md:text-4xl font-bold text-white tracking-wide`}>
                                            {card.name}
                                        </h3>
                                    </motion.div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}