"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: `Saro's portfolio`,
//   description: "Checkout my latest projects!",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NavBar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
