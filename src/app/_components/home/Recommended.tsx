import { DisplayText } from "../text/DisplayText";
import { ProductCard } from "../product/ProductCard";
import Demo1 from "~/../public/product/Npure/demo1.jpg";

const demoProduct = {
  name: "Centella Asiatica Clear Acne Barrier",
  price: 100,
  image: Demo1,
  brand: {
    name: "Npure",
  },
};

export function Recommended() {
  return (
    <div className="w-full p-8 px-24 bg-green-800 text-white flex flex-col gap-y-3 items-center">
      <DisplayText className="text-4xl"> Recommended For You </DisplayText>
      <ProductCard product={demoProduct} />
    </div>
  );
}
