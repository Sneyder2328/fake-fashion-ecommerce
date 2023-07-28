import { Nunito_Sans, Gelasio } from "next/font/google";

export const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const gelasio = Gelasio({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-gelasio",
  display: "swap",
});
