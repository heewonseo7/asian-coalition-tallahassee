"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CharlottenburgFont } from "@/lib/font";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Get Involved", href: "/get-involved" },
        { name: "Media", href: "/media" },
        { name: "Contact", href: "mailto:info@asiancoalitiontallahassee.org" },
    ];

    // lock background scroll when open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    return (
        <>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 lg:px-16">
            <Link href="/" aria-label="Home" className="relative h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
            <Image
                src="/logo.png"
                alt="Asian Coalition of Tallahassee"
                width={100}
                height={100}
            />
            </Link>

            <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="site-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((v) => !v)}
            className={`relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-3 py-2 md:px-5 md:py-3 text-white tracking-wide cursor-pointer ${CharlottenburgFont.className}`}
            >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                >
                {isOpen ? "CLOSE" : "MENU"}
                </motion.span>
            </AnimatePresence>
            </button>
        </header>

        <AnimatePresence>
            {isOpen && (
            <motion.div
                id="site-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                }}
                className="fixed inset-0 z-40 bg-(--color-primary)"
            >
                <nav
                aria-label="Primary"
                className="grid h-full place-items-center px-4"
                >
                <ul className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
                    {links.map((link) => (
                    <motion.li
                        key={link.name}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <Link
                        href={link.href}
                        className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-wide ${CharlottenburgFont.className}`}
                        >
                        {link.name.toUpperCase()}
                        </Link>
                    </motion.li>
                    ))}
                </ul>
                </nav>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}
