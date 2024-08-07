import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import { HeaderMain } from "@/components/HeaderMain";
import NavBar from "@/components/NavBar";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer";
import MobileNavBar from "@/components/MobileNavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (

    
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <NavBar />
        <MobileNavBar />
        {children}
        <Footer />
        </body>                
    </html>
  );
}
