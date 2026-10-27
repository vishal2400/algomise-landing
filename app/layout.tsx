import type { Metadata } from "next";
import { Figtree, Instrument_Sans, Martian_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-martian",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://algomise.com"),
  title: "Algomise — Intelligence, engineered.",
  description:
    "Algomise builds, deploys, and operates GenAI and Agentic AI systems — for our own products like CoinJeeto and CashBoo, and for businesses ready to move past the prototype.",
  openGraph: {
    title: "Algomise — Intelligence, engineered.",
    description:
      "An AI company built for the production era. We ship our own consumer AI apps and build AI for businesses.",
    url: "https://algomise.com",
    siteName: "Algomise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${figtree.variable} ${instrument.variable} ${martian.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
