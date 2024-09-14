import { Display } from "./Display";
import { Brands } from "./Brands";
import { Recommended } from "./Recommended";
import { Footer } from "../footer/Footer";

export function Home() {
  return (
    <div>
      <Display />
      <Brands />
      <Recommended />
      <Footer />
    </div>
  );
}
