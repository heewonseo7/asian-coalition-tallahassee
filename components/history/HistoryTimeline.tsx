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
    <section className={`w-full py-16 md:py-20 lg:py-24 bg-foreground relative overflow-hidden ${className}`}>
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
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-yellow-500 via-orange-500 to-rose-500 -translate-x-1/2 hidden md:block" />

          {/* Mobile Left Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-yellow-500 via-orange-500 to-rose-500 md:hidden" />

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
  return (
    <div className="relative">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className={`max-w-md ${isLeft ? 'ml-auto pr-24' : 'mr-auto pl-24'}`}>
          {/* Year above dotted line */}
          <div className={`mb-6 ${isLeft ? 'text-right' : 'text-left'}`}>
            <div
              className={`${BebasNeueFont.className} text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-rose-500 tracking-wide`}
            >
              {item.year}
            </div>
          </div>

          {/* Title and description below dotted line */}
          <div className={`mt-6 ${isLeft ? 'text-right' : 'text-left'}`}>
            <h3 className={`${BebasNeueFont.className} text-2xl md:text-3xl font-bold text-white tracking-wide mb-3`}>
              {item.title}
            </h3>
            <div className={`${InterFont.className} space-y-2 text-sm md:text-base leading-relaxed text-gray-300`}>
              {descriptionArray.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden pl-20">
        <TimelineContent
          item={item}
          descriptionArray={descriptionArray}
          align="left"
        />
      </div>

      {/* Central Node - Lantern on spine */}
      <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-20">
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

      {/* Horizontal Dotted Line connecting to Zodiac - Desktop */}
      <motion.div
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-white/40 z-10 ${
          isLeft ? 'left-1/2 ml-8' : 'right-1/2 mr-8'
        }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          width: 'calc(50% - 7rem)',
          transformOrigin: isLeft ? 'left' : 'right',
        }}
      />

      {/* Horizontal Dotted Line - Mobile */}
      <motion.div
        className="md:hidden absolute left-14 top-1/2 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-white/40 z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          width: '3rem',
          transformOrigin: 'left',
        }}
      />

      {/* Zodiac Icon at end of dotted line */}
      <div className={`absolute top-1/2 -translate-y-1/2 z-20 ${
        isLeft
          ? 'md:right-0'
          : 'md:left-0'
      }`}>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
              <Image
                src={getZodiacImage(item.zodiac)}
                alt={`${item.zodiac} zodiac`}
                width={32}
                height={32}
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
        className={`${BebasNeueFont.className} text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-rose-500 tracking-wide mb-4`}
      >
        {item.year}
      </div>

      {/* Title */}
      <h3 className={`${BebasNeueFont.className} text-2xl md:text-3xl font-bold text-white tracking-wide mb-3`}>
        {item.title}
      </h3>

      {/* Description */}
      <div className={`${InterFont.className} space-y-2 text-sm md:text-base leading-relaxed text-gray-300 max-w-md ${align === 'right' ? 'ml-auto' : 'mr-auto'}`}>
        {descriptionArray.map((desc, idx) => (
          <p key={idx}>{desc}</p>
        ))}
      </div>
    </motion.div>
  );
}
