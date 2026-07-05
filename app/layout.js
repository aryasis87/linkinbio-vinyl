import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({ subsets: ["latin"], variable: "--font-instrument", weight: "400", style: ["normal", "italic"] });
const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });

export const metadata = {
  title: "Laras — Dengarkan di Mana Saja",
  description: "Penyanyi & penulis lagu. Album baru, jadwal konser, dan semua platform streaming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${instrument.variable} ${dmsans.variable} antialiased`}>{children}</body>
    </html>
  );
}
