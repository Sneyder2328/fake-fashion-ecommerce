import type { Metadata } from "next";

import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "@/app/layout/navbar";
import { Footer } from "@/app/layout/footer";
import { gelasio, nunito_sans } from "./_lib/fonts";

export const metadata: Metadata = {
  title: "MiSto - Fake E-commerce Store",
  description:
    "This is a fake e-commerce store built for educational purposes, do not use it for any real purpose.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito_sans.variable} ${gelasio.variable} flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
