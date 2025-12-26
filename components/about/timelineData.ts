export type TimelineItem = {
  year: number;
  title: string;
  description: string | string[];
  zodiac: "rat" | "ox" | "tiger" | "rabbit" | "dragon" | "snake" | "horse" | "goat" | "monkey" | "rooster" | "dog" | "pig";
};

export const historyTimelineItems: TimelineItem[] = [
  {
    year: 2004,
    title: "Founded ACT",
    description: "The Asian Coalition of Tallahassee was established in December 2004, bringing together various Asian-interest organizations and individual members.",
    zodiac: "monkey",
  },
  {
    year: 2010,
    title: "Early Community Events",
    description: [
      "ACT began organizing community events to raise awareness",
      "Fostered meaningful dialogue between Asian Americans and the greater Tallahassee community",
    ],
    zodiac: "tiger",
  },
  {
    year: 2015,
    title: "Experience Asia Festival Grows",
    description: "The Experience Asia Festival expanded significantly, becoming a major annual cultural celebration in Tallahassee.",
    zodiac: "goat",
  },
  {
    year: 2023,
    title: "Continued Outreach",
    description: [
      "ACT continues to promote cultural exchange and understanding",
      "Expanding programs and community engagement initiatives",
    ],
    zodiac: "rabbit",
  },
];

