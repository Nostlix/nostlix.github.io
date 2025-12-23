import type { Metadata } from "next";
import { Jockey_One } from "next/font/google";
import "./css/globals.css";

const jockerOne = Jockey_One({
  weight: "400",
  variable: "--font-jockey-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - DUNON Valentin",
  description: "Discover who am I, including my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jockerOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
