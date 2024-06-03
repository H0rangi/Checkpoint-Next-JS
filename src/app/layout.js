import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import { NavbarDark } from "@/components/Navbar";
import { SimpleFooter } from "@/components/footer";

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <NavbarDark />
          <div className="flex-grow">{children}</div>
          <SimpleFooter />
        </div>
      </body>
    </html>
  );
}
