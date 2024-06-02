import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartLayout from "./cartLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get Shit Go",
  description: "Download high quality images for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartLayout>
          {children}
        </CartLayout>
      </body>
    </html>
  );
}
