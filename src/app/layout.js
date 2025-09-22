import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.css";
import "./new.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mirmedikaravan - Fortis Group of hospital",
  description: "Mirmedikaravan - Fortis Group of hospital",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ overflow: "unset" }}
      >
        {children}
      </body>
    </html>
  );
}
