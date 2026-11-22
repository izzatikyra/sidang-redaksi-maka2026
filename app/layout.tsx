
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidang Redaksi Moments Photography | MAKA 2026",
  description: "Galeri fotografi rasmi MAKA 2026."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
