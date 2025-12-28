"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BebasNeueFont, InterFont } from "@/lib/font";

export default function About() {
    return (
        <section className="w-full px-6 py-8 md:px-12 md:py-10 lg:px-12 relative overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/about-landing.jpg"
                    alt="Asian Festival"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-foreground/65"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto z-10">
                <motion.div
                    className="text-center mb-8 md:mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={`${BebasNeueFont.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-wide`}>
                        OUR IMPACT
                    </h2>
                    <p className={`${InterFont.className} text-base md:text-lg text-white/90 max-w-3xl mx-auto`}>
                        A tradition of culture, connection, and community in Tallahassee.
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto mb-8 md:mb-10">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        <motion.div
                            className="text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className={`${BebasNeueFont.className} text-6xl md:text-7xl lg:text-8xl font-bold mb-1 text-center tracking-wide`}>
                                15+
                            </div>
                            <div className="w-full h-0.5 bg-white mb-3"></div>
                            <h3 className={`${BebasNeueFont.className} text-xl md:text-2xl font-bold mb-2 tracking-wide`}>
                                Years
                            </h3>
                            <p className={`${InterFont.className} text-sm md:text-base leading-relaxed text-white/90`}>
                                Years of community service and cultural celebration
                            </p>
                        </motion.div>

                        <motion.div
                            className="text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        >
                            <div className={`${BebasNeueFont.className} text-6xl md:text-7xl lg:text-8xl font-bold mb-1 text-center tracking-wide`}>
                                50,000+
                            </div>
                            <div className="w-full h-0.5 bg-white mb-3"></div>
                            <h3 className={`${BebasNeueFont.className} text-xl md:text-2xl font-bold mb-2 tracking-wide`}>
                                Attendees
                            </h3>
                            <p className={`${InterFont.className} text-sm md:text-base leading-relaxed text-white/90`}>
                                Festival attendees reached through our annual Experience Asia Festival
                            </p>
                        </motion.div>

                        <motion.div
                            className="text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        >
                            <div className={`${BebasNeueFont.className} text-6xl md:text-7xl lg:text-8xl font-bold mb-1 text-center tracking-wide`}>
                                100+
                            </div>
                            <div className="w-full h-0.5 bg-white mb-3"></div>
                            <h3 className={`${BebasNeueFont.className} text-xl md:text-2xl font-bold mb-2 tracking-wide`}>
                                Partners
                            </h3>
                            <p className={`${InterFont.className} text-sm md:text-base leading-relaxed text-white/90`}>
                                Local vendors, performers, and volunteers who make our events possible
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link href="/about">
                        <motion.button
                            className={`${BebasNeueFont.className} bg-white text-[#C5393A] px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl text-base md:text-lg tracking-wide uppercase hover:bg-white/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#C5393A]`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn more about us
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}