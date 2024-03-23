import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "<Portfolio. />",
  description: "Welcome, 2024 Hyeseung's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center bg-[#141414] scrollNone">
      <body className="w-max max-w-screen h-max">{children}</body>
    </html>
  );
}
