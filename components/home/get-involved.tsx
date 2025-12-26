"use client";

import Image from "next/image";
import Link from "next/link";
import { BebasNeueFont } from "@/lib/font";

export default function GetInvolved() {
    const cards = [
        { 
            name: "VOLUNTEER", 
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

    return (
        <section className="w-full px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className={`${BebasNeueFont.className} text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 tracking-wide`}>
                    GET INVOLVED
                </h2>
                <p className="text-lg md:text-xl text-black mb-6">
                    Whether by volunteering, performing, or vending, you too can be a part of our festival!
                </p>
                <div className="w-24 h-1 bg-(--color-primary) mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {cards.map((card) => (
                        <Link 
                            href={card.href} 
                            key={card.name}
                            className="group relative block w-full overflow-hidden rounded-lg md:rounded-xl h-[300px] md:h-[450px]"
                        >
                            <Image
                                src={card.image}
                                alt={card.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            
                            <div className="absolute inset-0 bg-(--color-primary)/60 group-hover:bg-(--color-primary)/70 transition-colors"></div>
                            
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className={`${BebasNeueFont.className} text-3xl md:text-4xl font-bold text-white tracking-wide`}>
                                    {card.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}