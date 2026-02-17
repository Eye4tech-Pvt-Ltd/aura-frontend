import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura",
  description: "Aura platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<<<<<<< HEAD
        {/* <Sidebar /> */}
        {/* <main className="ml-64 pt-16 min-h-screen bg-slate-50"> */}
          {children}
        {/* </main> */}
=======
        {children}
>>>>>>> 8bcc3f1825b4f72fcfba081828aac4a3295c309b
      </body>
    </html>
  );
}
