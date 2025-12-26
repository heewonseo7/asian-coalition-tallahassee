import type { TimelineItem } from "./timelineData";

export function getZodiacImage(zodiac: TimelineItem["zodiac"]): string {
  return `/images/zodiac/zodiac_${zodiac}_centered.png`;
}

