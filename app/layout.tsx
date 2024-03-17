import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hyeseung Portfolio",
  description: "2024 Hyeseung Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center bg-[#141414]">
      <body className="w-max max-w-screen h-max">{children}</body>
    </html>
  );
}
