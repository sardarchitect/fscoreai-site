// 'use client'
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ThemeProvider } from "../context/theme";
import { FormPopUpProvider } from "../context/formPopup";
import { AlertPopUpProvider } from "../context/alertPopup";
import { MobileMenuProvider } from "../context/mobileMenu";
import { PageUpdateProvider } from "../context/pageUpdate";
// import { CookieConsent } from "@/src/components/utilsComponents/CookieConsent";
import DemoForm from "../components/utilsComponents/DemoForm";
import Alert from "../components/utilsComponents/Alert";

export const metadata: Metadata = {
  title: "fscore.ai",
  // description: "This is the demo desctiption",
};

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the weights you need
  display: "swap", // Ensures faster rendering
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`bg-white ${inter.className}`}
      >
          <ThemeProvider>
            <MobileMenuProvider>
              <FormPopUpProvider>
                <AlertPopUpProvider>
                  <PageUpdateProvider>
                    <Navbar />
                    <DemoForm />
                    <Alert/>
                    {/* <Header/> */}
                    <main className="">{children}</main>
                    {/* <CookieConsent /> */}
                    <Footer />
                  </PageUpdateProvider>
                </AlertPopUpProvider>
              </FormPopUpProvider>
            </MobileMenuProvider>
          </ThemeProvider>

      </body>
    </html>
  );
}
