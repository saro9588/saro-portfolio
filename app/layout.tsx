import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });
import "@radix-ui/themes/styles.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: `Saro Babikian - Software Developer`,
  description: "LA based software developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text text-default-800">
      <body className={`${inter.className} text-default-600 dark:text-white`}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
