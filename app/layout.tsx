import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });
import "@radix-ui/themes/styles.css";
import { Providers } from "./providers";

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
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
