import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: `Saro's portfolio`,
  description: "Checkout my latest projects!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body className={`${inter.className} dark text-foreground bg-background`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
