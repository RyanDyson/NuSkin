"use client";

import Image, { type StaticImageData } from "next/image";
import Demo1 from "~/../public/product/Npure/demo1.jpg";
import { CustomButton } from "~/components/custom/CustomButton";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "sonner";

type ProductCardProps = {
  product?: {
    name: string;
    price: number;
    brand: {
      name: string;
    };
    image: string | StaticImageData;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center p-1 bg-slate-200 rounded-md gap-y-2 max-w-[15vw]">
      <Image
        src={product?.image ?? Demo1}
        alt="Product"
        width={250}
        height={250}
        className="rounded-sm w-full object-cover"
      />
      <div className="text-green-950 w-full px-3">
        <p className="text-green-950/80">{product?.brand.name}</p>
        <p className="text-lg font-bold">{product?.name}</p>
        <p>{product?.price} $HKD</p>
      </div>
      <CustomButton
        className="self-end mx-3 mb-3"
        onClick={() => toast("item was added to cart")}
      >
        <FaCartPlus />
      </CustomButton>
    </div>
  );
}
