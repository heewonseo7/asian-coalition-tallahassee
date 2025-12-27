"use client";

import PageHeader from "@/components/layout/PageHeader";
import { BebasNeueFont, InterFont } from "@/lib/font";
import Image from "next/image";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import Member from "@/components/about/Member";
import { motion } from "motion/react";

export default function About() {
    return (
        <main>
            <PageHeader
                title="About Us"
                image="/images/banners/about.jpg"
                imageAlt="About Image">
            </PageHeader>

            {/* Mission Statement */}
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                        {/* Text Content */}
                        <motion.div 
                            className="flex-1 space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h2 className={`${BebasNeueFont.className} text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-primary) tracking-wide`}>
                                OUR MISSION
                            </h2>
                            <div className={`${InterFont.className} space-y-4 text-base md:text-lg leading-relaxed text-gray-700`}>
                                <p>
                                    The Asian Coalition of Tallahassee (ACT) is a 501(c)(3) non-profit organization dedicated
                                    to promoting cultural exchange, understanding, and dialogue within the Asian American community
                                    and the broader Tallahassee area.
                                </p>
                                <p>
                                    ACT works to provide a safe, welcoming, and inclusive environment
                                    while fostering awareness and appreciation of Asian cultures through education, community
                                    engagement, and cultural programming.
                                </p>
                            </div>
                        </motion.div>
                        
                        {/* Image */}
                        <motion.div 
                            className="flex-1 w-full lg:w-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="relative aspect-4/3 w-full max-w-lg mx-auto lg:max-w-none rounded-lg overflow-hidden shadow-lg">
                                <Image 
                                    src="/images/mission.jpg" 
                                    alt="Mission Statement" 
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* History Timeline Section */}
            <HistoryTimeline />

            {/* Board Members Section */}
            <section className="w-full py-12 md:py-16 lg:py-20 hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                    <motion.h2 
                        className={`${BebasNeueFont.className} text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-primary) tracking-wide mb-8 md:mb-12`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Our Board Members
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Member name="John Doe" position="President" image="/images/member.jpg" imageAlt="John Doe" description="John Doe is the president of the Asian Coalition of Tallahassee." />
                    </div>
                </div>
            </section>
        </main>
    );
}