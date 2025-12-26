import localFont from "next/font/local";

export const Charlottenburg = localFont({
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
