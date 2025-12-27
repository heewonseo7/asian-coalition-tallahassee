import localFont from "next/font/local";
import { Bebas_Neue, Inter, Playfair_Display } from "next/font/google";

export const CharlottenburgFont = localFont({
    src: [
        {
            path: "../public/fonts/Charlottenburg-Compressed.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-charlottenburg",
    display: "swap",
});

export const BebasNeueFont = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bebas-neue",
    display: "swap",
});

export const InterFont = Inter({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const PlayfairDisplayFont = Playfair_Display({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-playfair-display",
    display: "swap",
});
