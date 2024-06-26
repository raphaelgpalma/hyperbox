import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchBar from "../components/searchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HyperCube",
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
        <body className="bg-gray-950">
          <div className="min-h-screen overflow-hidden bg-gray-950">
            <SearchBar />
          </div>
        </body>
        {children}
      </body>
    </html>
  );
}
