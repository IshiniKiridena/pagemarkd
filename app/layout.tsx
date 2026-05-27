import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pagemarkd — Share Your Reading",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Redressed&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-redressed antialiased">{children}</body>
    </html>
  );
}
