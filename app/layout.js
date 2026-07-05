import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({ subsets: ["latin"], variable: "--font-instrument", weight: "400", style: ["normal", "italic"] });
const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Laras","jobTitle":"Penyanyi & Penulis Lagu","url":"https://vinyl.pintuweb.com","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://vinyl.pintuweb.com"),
  title: "Laras — Dengarkan di Mana Saja",
  description: "Link in bio penyanyi & penulis lagu Laras: album baru, jadwal konser, dan semua platform streaming.",
  applicationName: "Laras",
  keywords: ["link in bio", "penyanyi", "penulis lagu", "musik", "streaming"],
  authors: [{ name: "Laras" }],
  creator: "Laras",
  publisher: "Laras",
  alternates: { canonical: "https://vinyl.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://vinyl.pintuweb.com",
    siteName: "Laras",
    title: "Laras — Dengarkan di Mana Saja",
    description: "Link in bio penyanyi & penulis lagu Laras: album baru, jadwal konser, dan semua platform streaming.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Laras — Dengarkan di Mana Saja" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laras — Dengarkan di Mana Saja",
    description: "Link in bio penyanyi & penulis lagu Laras: album baru, jadwal konser, dan semua platform streaming.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${instrument.variable} ${dmsans.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
