import PageHeader from "@/components/layout/PageHeader";
import { BebasNeueFont, InterFont } from "@/lib/font";
import Image from "next/image";
import HistoryTimeline from "@/components/history/HistoryTimeline";

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
                        <div className="flex-1 space-y-6">
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
                        </div>
                        
                        {/* Image */}
                        <div className="flex-1 w-full lg:w-auto">
                            <div className="relative aspect-4/3 w-full max-w-lg mx-auto lg:max-w-none rounded-lg overflow-hidden shadow-lg">
                                <Image 
                                    src="/images/mission.jpg" 
                                    alt="Mission Statement" 
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Timeline Section */}
            <HistoryTimeline />

            {/* Board of Members Section */}
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
                    <h2 className={`${BebasNeueFont.className} text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-wide mb-6`}>
                        BOARD OF MEMBERS
                    </h2>
                    <p className={`${InterFont.className} text-base md:text-lg leading-relaxed text-gray-700`}>
                        The Asian Coalition of Tallahassee is a non-profit organization that promotes the culture and history of Asia.
                    </p>
                </div>
            </section>
        </main>
    );
}