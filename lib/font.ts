import localFont from "next/font/local";
import { Bebas_Neue } from "next/font/google";

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