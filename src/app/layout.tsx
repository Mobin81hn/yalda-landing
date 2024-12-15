import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "اقساط مارکت",
  description: "کمپین یلدای اقساط مارکت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-2">
        {children}
      </body>
    </html>
  );
}
