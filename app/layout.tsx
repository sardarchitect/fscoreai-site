import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Merriweather } from "next/font/google"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lending Page",
  description: "This is the demo desctiption",
};

const playfair_display_init = Playfair_Display({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-playfair_display'
})
const Merriweather_init = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-Merriweather'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair_display_init}, ${Merriweather_init}`}>
        <Navbar></Navbar>
        <main>
        {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
