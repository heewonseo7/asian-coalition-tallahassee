"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BebasNeueFont  } from "@/lib/font";
import { faInstagram, faTwitter, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {

    const links = [
        { name: "Facebook", href: "https://www.facebook.com/asiancoalitiontallahassee/", icon: faFacebook },
        { name: "Instagram", href: "https://www.instagram.com/asiancoalitiontallahassee/", icon: faInstagram },
        { name: "Twitter", href: "https://www.twitter.com/asiancoalitiontallahassee/", icon: faTwitter },
        { name: "YouTube", href: "https://www.youtube.com/asiancoalitiontallahassee/", icon: faYoutube },
    ]

    return (
        <section className="relative h-screen w-full">
            <Image
                src="/images/hero.jpg"
                alt="Asian Coalition of Tallahassee Community"
                fill
                className="object-cover"
                priority
                quality={90}
            />
            
            <div className="absolute inset-0 bg-black/65" />
            
            <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 md:px-12 lg:px-20 pt-32 md:pt-40 lg:pt-20">
                <motion.header
                    className="max-w-6xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3,
                            },
                        },
                    }}
                >
                    <motion.h3
                        className={`${BebasNeueFont.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-(--color-primary) tracking-wide`}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                    >
                        22<sup>nd</sup> ANNUAL
                    </motion.h3>
                    
                    <motion.h1
                        className={`${BebasNeueFont.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none tracking-wide`}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                    >
                        EXPERIENCE ASIA<br />
                        <span className="block -mt-2">FESTIVAL</span>
                    </motion.h1>
                    
                    <motion.h3
                        className={`${BebasNeueFont.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-(--color-primary) tracking-wide mb-8`}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                    >
                        SEP 27, 2026
                    </motion.h3>
                </motion.header>
                
                <motion.nav
                    aria-label="Social media"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.9,
                            },
                        },
                    }}
                >
                    <ul className="flex gap-4">
                        {links.map((link) => (
                            <motion.li
                                key={link.name}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    },
                                }}
                            >
                                <Link 
                                    href={link.href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="flex items-center justify-center text-white border-2 border-white p-3 transition-all hover:bg-white hover:text-(--color-primary) hover:scale-110"
                                >
                                    <FontAwesomeIcon icon={link.icon} className="w-6 h-6" />
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>
            </div>
        </section>
    );
}

