import { DisplayText } from "../text/DisplayText";
import { ProductCard } from "../product/ProductCard";

export function Recommended() {
  return (
    <div className="w-full p-8 px-24 bg-green-800 text-white flex flex-col gap-y-2 items-center">
      <DisplayText className="text-3xl"> Recommended For You </DisplayText>
      <ProductCard />
    </div>
  );
}
