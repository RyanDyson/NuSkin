"use client";

import Demo1 from "~/../public/product/Npure/demo1.jpg";
import Image from "next/image";
import { useState } from "react";
import { CustomButton } from "~/components/custom/CustomButton";
import {
  FaShoppingCart,
  FaPlus,
  FaMinus,
  // FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { DisplayText } from "~/app/_components/text/DisplayText";

const DemoObject = {
  brand: {
    name: "NPure",
  },
  name: "Centella Asiatica Acne Clear Barrier",
  price: 56,
  description: "Moisturizer",
  images: [Demo1],
};

export default function Page({ params }: { params: { product: string } }) {
  const [amount, setAmount] = useState<number>(0);
  // const [api, setApi] = useState<CarouselApi | null>(null);

  return (
    <div className="flex flex-col md:flex-row p-8 px-24 items-center">
      <Carousel className="max-w-[600px] flex gap-x-2">
        <div>
          <CustomButton
            // onClick={() => api?.scrollTo(3)}
            className=" absolute z-50 bg-opacity-70 h-4 p-4"
          >
            <FaArrowLeft />
          </CustomButton>
        </div>
        <CarouselContent>
          <CarouselItem>
            <Image src={DemoObject.images[0] ?? ""} alt="product" />
          </CarouselItem>
          <CarouselItem>
            <Image src={DemoObject.images[0] ?? ""} alt="product" />
          </CarouselItem>
          <CarouselItem>
            <Image src={DemoObject.images[0] ?? ""} alt="product" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="w-full flex flex-col gap-y-1">
        <p className="text-green-950/85">{DemoObject.brand.name}</p>
        <DisplayText className="text-xl">{DemoObject.name}</DisplayText>
        <h2>{DemoObject.price}</h2>
        <p>{DemoObject.description}</p>
        <div className="w-full flex flex-col gap-y-2">
          <div className="w-full flex gap-x-2 justify-between">
            <CustomButton onClick={() => setAmount(amount - 1)}>
              <FaMinus />
            </CustomButton>
            {amount}
            <CustomButton onClick={() => setAmount(amount + 1)}>
              <FaPlus />
            </CustomButton>
          </div>
          <CustomButton
            className="flex justify-between gap-x-4 w-full"
            size={"lg"}
          >
            <FaShoppingCart />
            <span>add to cart</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
