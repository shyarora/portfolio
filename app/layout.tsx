import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shyam Arora - Software Engineer 4 | Full-Stack Developer",
  description:
    "Software Engineer 4 at Cisco with 8+ years of expertise building scalable web applications, developer tools, and cloud-native platforms.",
  keywords: "software engineer, full-stack developer, react, node.js, typescript, golang, developer tools, cisco",
  authors: [{ name: "Shyam Arora" }],
  creator: "Shyam Arora",
  metadataBase: new URL("https://shyarora.dev"),
  openGraph: {
    title: "Shyam Arora - Software Engineer 4 | Full-Stack Developer",
    description:
      "Software Engineer 4 at Cisco with 8+ years of expertise building scalable web applications, developer tools, and cloud-native platforms.",
    url: "https://shyarora.dev",
    siteName: "Shyam Arora Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shyam Arora - Software Engineer 4",
    description:
      "Building the future of developer tooling. 8+ years crafting scalable web applications and cloud-native platforms.",
    creator: "@shyarora",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-dark-950 text-dark-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
