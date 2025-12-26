"use client";

import Link from "next/link";
import Image from "next/image";
import { InterFont } from "@/lib/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const socialLinks = [
        { name: "Facebook", href: "https://www.facebook.com/asiancoalitiontallahassee/", icon: faFacebook },
        { name: "Instagram", href: "https://www.instagram.com/asiancoalitiontallahassee/", icon: faInstagram },
        { name: "Twitter", href: "https://www.twitter.com/asiancoalitiontallahassee/", icon: faTwitter },
        { name: "YouTube", href: "https://www.youtube.com/asiancoalitiontallahassee/", icon: faYoutube },
    ];

    const linkColumns = [
        {
            links: [
                { name: "About", href: "/about" },
                { name: "Events", href: "/events" },
                { name: "Get Involved", href: "/get-involved" },
            ],
        },
        {
            links: [
                { name: "Media", href: "/media" },
                { name: "Contact", href: "mailto:info@asiancoalitiontallahassee.org" },
            ],
        },
        {
            links: [
                { name: "Resources", href: "/resources" },
                { name: "Support", href: "/support" },
            ],
        },
        {
            links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
            ],
        },
    ];

    return (
        <footer className={`w-full bg-foreground text-background ${InterFont.className}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <div className="py-12 md:py-16 border-b border-white/20">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 lg:gap-8">
                        <div className="col-span-2 md:col-span-1 space-y-2">
                            <div className="mb-4">
                                <Image
                                    src="/logo.png"
                                    alt="Asian Coalition of Tallahassee"
                                    width={120}
                                    height={120}
                                    className="mb-4"
                                />
                            </div>
                            <p className="text-white/80 text-sm uppercase tracking-wide">
                                Building bridges, celebrating culture, and empowering our community
                            </p>
                        </div>

                        {linkColumns.map((column, columnIndex) => (
                            <div key={columnIndex} className="space-y-3">
                                <nav aria-label={`Footer navigation column ${columnIndex + 2}`}>
                                    <ul className="space-y-2">
                                        {column.links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wide"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <nav aria-label="Social media">
                            <ul className="flex gap-4">
                                {socialLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.name}
                                            className="flex items-center justify-center text-white/80 border-2 border-white/30 p-3 transition-all hover:bg-white hover:text-(--color-primary) hover:scale-110"
                                        >
                                            <FontAwesomeIcon icon={link.icon} className="w-6 h-6" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <p className="text-white/60 text-sm text-center md:text-right">
                            © {new Date().getFullYear()} Asian Coalition of Tallahassee. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
