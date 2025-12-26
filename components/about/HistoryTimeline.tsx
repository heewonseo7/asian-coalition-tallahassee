"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { TimelineItem } from "./timelineData";
import { historyTimelineItems } from "./timelineData";
import { getZodiacImage } from "./historyUtils";
import { BebasNeueFont, InterFont } from "@/lib/font";

interface HistoryTimelineProps {
  items?: TimelineItem[];
  className?: string;
}

export default function HistoryTimeline({
  items = historyTimelineItems,
  className = ""
}: HistoryTimelineProps) {
  return (
    <section className={`hidden w-full py-16 md:py-20 lg:py-24 bg-foreground relative overflow-hidden ${className}`}>
      <style jsx global>{`
        @media (min-width: 768px) {
          .timeline-dotted-line {
            top: var(--desktop-top) !important;
            width: var(--desktop-width) !important;
          }
        }
      `}</style>
      <div className="absolute inset-0 bg-foreground pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Heading */}
        <motion.h2
          className={`${BebasNeueFont.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-12 md:mb-16 text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          OUR HISTORY
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line - Responsive positioning */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-yellow-500 via-orange-500 to-rose-500 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-20">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;
              const descriptionArray = Array.isArray(item.description)
                ? item.description
                : [item.description];

              return (
                <TimelineRow
                  key={`${item.year}-${index}`}
                  item={item}
                  isLeft={isLeft}
                  descriptionArray={descriptionArray}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineRowProps {
  item: TimelineItem;
  isLeft: boolean;
  descriptionArray: string[];
}

function TimelineRow({ item, isLeft, descriptionArray }: TimelineRowProps) {
  const ANCHOR_TOP = "6.5rem";

  return (
    <div className="relative min-h-48">
      {/* Unified Content Layout - Responsive */}
      <div className={`pl-20 md:pl-0 md:max-w-md ${
        isLeft ? 'md:ml-auto md:pr-24' : 'md:mr-auto md:pl-24'
      }`}>
        <TimelineContent
          item={item}
          descriptionArray={descriptionArray}
          align={isLeft ? "right" : "left"}
        />
      </div>

      {/* Lantern Node - Responsive positioning */}
      <div
        className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-20"
        style={{ top: ANCHOR_TOP }}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <Image
              src="/images/lantern.png"
              alt="Timeline marker"
              width={64}
              height={64}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Horizontal Dotted Line - Unified responsive */}
      <motion.div
        className={`timeline-dotted-line absolute h-0.5 border-t-2 border-dashed border-white/40 z-10 left-14 ${
          isLeft 
            ? 'md:left-1/2 md:ml-8' 
            : 'md:right-1/2 md:mr-8'
        }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          '--desktop-top': `calc(${ANCHOR_TOP} + 2rem)`,
          '--desktop-width': 'calc(50% - 7rem)',
          top: `calc(${ANCHOR_TOP} + 1.5rem)`,
          width: '3rem',
          transformOrigin: isLeft ? 'left' : 'right',
        } as React.CSSProperties & Record<string, string>}
      />

      {/* Zodiac Icon - Responsive positioning */}
      <div
        className={`absolute z-20 ${isLeft ? 'md:right-0' : 'md:left-0'}`}
        style={{ top: `calc(${ANCHOR_TOP} + 1rem)` }}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-background flex items-center justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
              <Image
                src={getZodiacImage(item.zodiac)}
                alt={`${item.zodiac} zodiac`}
                width={50}
                height={50}
                className="object-contain p-0.5"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface TimelineContentProps {
  item: TimelineItem;
  descriptionArray: string[];
  align: "left" | "right";
}

function TimelineContent({ item, descriptionArray, align }: TimelineContentProps) {
  return (
    <motion.div
      className={`${align === 'right' ? 'text-right' : 'text-left'}`}
      initial={{ opacity: 0, x: align === 'right' ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Year */}
      <div
        className={`${BebasNeueFont.className} text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-rose-500 tracking-wide mb-4 md:mb-6`}
      >
        {item.year}
      </div>

      {/* Title and Description */}
      <div className="mt-6 md:mt-0">
        <h3 className={`${BebasNeueFont.className} text-2xl md:text-3xl font-bold text-white tracking-wide mb-3`}>
          {item.title}
        </h3>
        <div className={`${InterFont.className} space-y-2 text-sm md:text-base leading-relaxed text-gray-300 ${align === 'right' ? 'md:ml-auto' : ''}`}>
          {descriptionArray.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
