import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MatrixRain from "@/components/Matrixrain";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Suryanshi Singh",
  description: "Portfolio of Suryanshi Singh — projects, experience, and writing.",
  metadataBase: new URL("https://suryanshii.com"),
  openGraph: {
    title: "Suryanshi Singh",
    description: "Portfolio of Suryanshi Singh — projects, experience, and writing.",
    url: "https://suryanshii.com",
    siteName: "Suryanshi Singh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jetbrains.variable} antialiased`}>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
        <MatrixRain />
        {children}
      </body>
    </html>
  );
}