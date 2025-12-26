"use client";

import Image from "next/image";
import Link from "next/link";
import { Charlottenburg } from "@/lib/font";

export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            {/* Background Image */}
            <Image
                src="/images/hero.jpg"
                alt="Asian Coalition of Tallahassee Community"
                fill
                className="object-cover"
                priority
                quality={90}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            
            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                <h1 className={`${Charlottenburg.className} mb-6 max-w-5xl text-6xl font-medium tracking-wide text-white md:text-8xl lg:text-9xl`}>
                    ASIAN COALITION OF TALLAHASSEE
                </h1>
                <p className="mb-10 max-w-2xl text-xl text-white/90 md:text-2xl">
                    Building bridges, celebrating culture, and empowering our community
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/about"
                        className="rounded-full bg-[#c5393a] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[#a02f30] hover:scale-105"
                    >
                        Learn More
                    </Link>
                    <Link
                        href="/get-involved"
                        className="rounded-full border-2 border-white px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white hover:text-[#c5393a]"
                    >
                        Get Involved
                    </Link>
                </div>
            </div>
            
        </section>
    );
}

