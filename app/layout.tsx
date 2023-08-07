import type { Metadata } from "next";

import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "@/app/_components/navbar/navbar";
import { Footer } from "@/app/_components/footer/footer";
import { gelasio, nunito_sans } from "./_lib/fonts";
import { ReactQueryProvider } from "./_components/react-query-provider";
import { FakeDisclaimer } from "./_components/fake-disclaimer";

const SITE_NAME = "MiSto - Fake E-commerce Store";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "This is a fake e-commerce store built for educational purposes, do not use it for any real purpose.",
  robots: {
    follow: false,
    index: false,
  },
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
          <FakeDisclaimer />
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
