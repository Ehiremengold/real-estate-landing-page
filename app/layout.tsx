import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const lufga = localFont({
  src: [
    {
      path: "../public/fonts/LufgaExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/LufgaLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/LufgaRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LufgaSemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/LufgaBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/LufgaExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],

  variable: "--font-lufga",
});

export const metadata: Metadata = {
  title: "Real Estate Portfolio",
  description:
    "Join real estate developers all over the world to put the best houses in the market on the map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lufga.variable} antialiased`}>{children}</body>
    </html>
  );
}
