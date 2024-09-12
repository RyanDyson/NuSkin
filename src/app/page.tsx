import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import { NavBar } from "./_components/Navbar";
import { DM_Sans } from "next/font/google";

const font = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default async function Home() {
  return (
    <HydrateClient>
      <main className="bg-green-50" style={font.style}>
        <NavBar />
      </main>
    </HydrateClient>
  );
}
