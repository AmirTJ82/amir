import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "اجرامون | طراحی دکوراسیون داخلی لوکس",
  description: "شرکت اجرامون - طراحی و اجرای دکوراسیون داخلی با بالاترین کیفیت",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
