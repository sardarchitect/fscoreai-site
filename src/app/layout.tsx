// 'use client'
import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Merriweather } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ThemeProvider } from "../context/theme";
import { FormPopUpProvider } from "../context/formPopup";
import { AlertPopUpProvider } from "../context/alertPopup";
import { MobileMenuProvider } from "../context/mobileMenu";
import { PageUpdateProvider } from "../context/pageUpdate";
import { CookieConsent } from "@/src/components/utilsComponents/CookieConsent";
import AuthProviders from "../providers/authProvider";
import { ReactLenis, useLenis } from 'lenis/react'
import DemoForm from "../components/utilsComponents/DemoForm";
import ThanksMsgAlert from "../components/utilsComponents/ThanksMsgAlert";

export const metadata: Metadata = {
  title: "fscore.ai",
  // description: "This is the demo desctiption",
};

const playfair_display_init = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair_display",
});
const Merriweather_init = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-Merriweather",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`bg-white dark:bg-theme-color ${playfair_display_init}, ${Merriweather_init}`}
      >
        <AuthProviders>
          <ThemeProvider>
            <MobileMenuProvider>
              <FormPopUpProvider>
                <AlertPopUpProvider>
                  <PageUpdateProvider>
                    <Navbar />
                    <DemoForm />
                    <ThanksMsgAlert/>
                    {/* <ReactLenis root> */}
                    {/* <Header/> */}
                    <main className="">{children}</main>
                    <CookieConsent />
                    <Footer />
                    {/* </ReactLenis> */}
                  </PageUpdateProvider>
                </AlertPopUpProvider>
              </FormPopUpProvider>
            </MobileMenuProvider>
          </ThemeProvider>
        </AuthProviders>

      </body>
    </html>
  );
}
