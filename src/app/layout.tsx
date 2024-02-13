import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIT Distribution",
  description: "A distribution and trading company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-6xl mx-auto">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
