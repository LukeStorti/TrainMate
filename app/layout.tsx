import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Nav/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "TrainMate",
  description: "Work Smarter - Train Harder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
