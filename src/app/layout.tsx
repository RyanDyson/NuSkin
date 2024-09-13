import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import { DM_Sans } from "next/font/google";

import { NavBar } from "./_components/Navbar";

export const metadata: Metadata = {
  title: "NuSkin",
  description: "Skincare & Cosmetics from nusantara",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body style={font.style}>
        <TRPCReactProvider>
          <NavBar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
