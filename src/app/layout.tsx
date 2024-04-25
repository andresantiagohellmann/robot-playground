import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robot Playground by André Santiago Hellmann",
  description: "Lab Three js André Santiago Hellmann",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="pt-BR">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
