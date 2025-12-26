"use client";

import Image from "next/image";

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
        <>
            <section>
                <h2 className="text-4xl font-bold text-center">Sponsors</h2>
                <div className="container mx-auto px-4 py-12">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.name}>
                            <Image src={sponsor.image} alt={sponsor.name} width={100} height={100} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}