import { Geist, Geist_Mono, Allura, Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import AosInitializer from "./components/AosInitializer";


const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   title: "Brij Bhusan  & Rishika's Wedding Invitation | 26 November 2025",
  description:
    "Join us in celebrating the union of Manan & Priya — a journey of love, laughter, and togetherness. Explore our digital wedding invitation, event details, and RSVP online.",
  keywords: [
    "wedding invitation",
    "digital wedding card",
    "wedding website",
    "Manan and Priya wedding",
    "Indian wedding",
    "RSVP online",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.variable} ${allura.className} antialiased`}
      >
        <AosInitializer/>
        {children}
      </body>
    </html>
  );
}
