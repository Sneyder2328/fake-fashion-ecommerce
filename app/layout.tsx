import type { Metadata } from "next";

import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "@/app/layout/navbar";
import { Footer } from "@/app/layout/footer";
import { gelasio, nunito_sans } from "./_lib/fonts";
import { ReactQueryProvider } from "./_components/react-query-provider";

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
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
