"use client";

import { FaShoppingCart } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import demoOne from "~/../public/shoppingCart/demo1.jpg";
import demoTwo from "~/../public/shoppingCart/demo2.jpg";
import demoThree from "~/../public/shoppingCart/demo3.jpeg";
import Image from "next/image";
import { useState } from "react";
import { CustomButton } from "~/components/custom/CustomButton";
import { DisplayText } from "../text/DisplayText";

//to do -> add infinite scroller with loading, add skeleton when loading

// demo item
const cartItem = [
  {
    id: 1,
    name: "NPure Centella Asiatica Acne Calming Barrier",
    price: "98000 IDR",
    image: demoOne,
    brand: "NPure",
    quantity: 1,
  },
  {
    id: 2,
    name: "Aubree Skin Vitamin C Serum",
    price: "98000 IDR",
    image: demoTwo,
    brand: "The Aubree",
    quantity: 1,
  },
  {
    id: 3,
    name: "Harlette probiotic oat sun cream",
    price: "98000 IDR",
    image: demoThree,
    brand: "Harlette",
    quantity: 1,
  },
];

const CardItemCard = (props: (typeof cartItem)[number]) => {
  const { name, price, image, brand, quantity } = props;
  const [quantityVar, setQuantityVar] = useState<number>(quantity);

  return (
    <div>
      <div className="flex gap-x-2 max-w-96">
        <Image src={image} alt={name} className="w-20 h-20 rounded-md" />
        <div className="flex flex-col">
          <p className="text-md font-bold">{name}</p>
          <p className="text-sm ">{brand}</p>
          <p className="text-sm">{price}</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <CustomButton
            className="text-sm"
            onClick={() => setQuantityVar(quantityVar - 1)}
          >
            -
          </CustomButton>
          <p className="text-sm p-2">{quantityVar}</p>
          <CustomButton
            className="text-sm"
            onClick={() => setQuantityVar(quantityVar + 1)}
          >
            +
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export function Cart() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaShoppingCart className="text-2xl cursor-pointer hover:text-green-200 transition-all duration-200" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col bg-white p-2 ">
        <DropdownMenuLabel className="text-lg font-black">
          <DisplayText>Users Shopping Cart</DisplayText>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-green-950/50" />
        <div className="flex flex-col gap-y-1 w-max max-h-80 overflow-y-scroll">
          {cartItem.map((item, index) => {
            return (
              <DropdownMenuItem key={index} className="hover:bg-green-50">
                <CardItemCard {...item} />
              </DropdownMenuItem>
            );
          })}
        </div>

        <DropdownMenuSeparator className="bg-green-950/50" />
        <CustomButton size={"lg"} className="mt-4">
          Checkout
        </CustomButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
