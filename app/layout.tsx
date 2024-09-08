import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["300", "400", "600"], subsets: ["latin"] });
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
    <html lang="en" className={`text text-default-800 ${poppins.className}`}>
            <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
          rel="stylesheet"
        />
      </head>
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
