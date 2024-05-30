
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import { NavbarDark } from "@/components/navbar";
import { ProfileCard } from "@/components/Card";
import { SimpleFooter } from "@/components/footer";


export const metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <NavbarDark/>
       <ProfileCard/>
       <SimpleFooter/>
        {children}</body>
    </html>
  );
}
