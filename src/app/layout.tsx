import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs Image Gallery",
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
        <div className="sticky top-0 z-30 navbar">
          <Navbar />
        </div>

        <div className="w-[80%]   lg:w-[90%] sm:w-[95%] mx-auto">
          <div className="my-3">
            <SearchBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
