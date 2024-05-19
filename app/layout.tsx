import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Merriweather } from "next/font/google"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ThemeProvider} from "../context/theme";
import {FormPopUpProvider} from "../context/formPopup";

export const metadata: Metadata = {
  title: "fscore.ai",
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
}>) 



{
  return (
    <html lang="en" >
      <body className={`bg-white dark:bg-theme-color ${playfair_display_init}, ${Merriweather_init}`}>
      <ThemeProvider>
        <FormPopUpProvider>
        <Navbar ></Navbar>
        <main>
        {children}
        </main>
        <Footer></Footer>
        </FormPopUpProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
