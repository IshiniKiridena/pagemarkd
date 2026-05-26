import type { Metadata } from "next";
import { Redressed } from "next/font/google";
import "./globals.css";

const redressed = Redressed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-redressed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "pagemarked — Share Your Reading",
  description:
    "Document and share your reading sessions with beautiful Instagram Story cards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redressed.className} ${redressed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
