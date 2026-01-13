import { Geist, Geist_Mono, Allura, Playfair_Display, Cormorant_Garamond, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";
import AosInitializer from "./components/AosInitializer";
import FloatingMusicButton from './components/FloatingMusicButton'

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
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   title: "Manan & Shivani's Wedding Invitation | 12 February  2026",
  description:
    "Join us in celebrating the union of Yash & Mahak — a journey of love, laughter, and togetherness. Explore our digital wedding invitation, event details, and RSVP online.",
  keywords: [
    "wedding invitation",
    "digital wedding card",
    "wedding website",
    "Manan and Shivani wedding",
    "Indian wedding",
    "RSVP online",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${poppins.variable} ${dancingScript.variable} antialiased`}
      >
        <AosInitializer/>
        {children}
        <FloatingMusicButton/>
      </body>
    </html>
  );
}
