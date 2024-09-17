import { Display } from "./Display";
import { Brands } from "./Brands";
import { Recommended } from "./Recommended";
import { Footer } from "../footer/Footer";
import { SignedOut } from "@clerk/nextjs";

export function Home() {
  return (
    <div className="pt-20">
      <Display />
      <Brands />
      <Recommended />
      <Footer />
    </div>
  );
}
