import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "~/styles/globals.css";
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
    <ClerkProvider>
      <html lang="en">
        <body style={font.style}>
          <TRPCReactProvider>
            <NavBar />
            <SpeedInsights />
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
