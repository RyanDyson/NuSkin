import { DisplayText } from "../text/DisplayText";
import Image, { type StaticImageData } from "next/image";
import nPure from "~/../public/images.png";
import { CustomButton } from "~/components/custom/CustomButton";

type Brand = {
  name: string;
  logo: string | StaticImageData;
};

const BrandItem = (item: Brand) => {
  return (
    <div className="flex flex-col items-center gap-y-2 rounded-lg text-center bg-neutral-50 p-2">
      <Image
        src={item.logo}
        alt={item.name}
        className="rounded-md max-w-64 max-h-32 object-cover"
      />
      <span className="font-bold">{item.name}</span>
    </div>
  );
};

const BrandDemo = [
  {
    name: "Brand 1",
    logo: nPure,
  },
  {
    name: "Brand 2",
    logo: nPure,
  },
  {
    name: "Brand 3",
    logo: nPure,
  },
  {
    name: "Brand 4",
    logo: nPure,
  },
];

export function Brands() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 bg-neutral-200 p-8 px-24 text-green-900">
      <DisplayText className="text-4xl">Our Brands</DisplayText>
      <div className="flex gap-x-4">
        {BrandDemo.map((item, index) => {
          return <BrandItem key={index} {...item} />;
        })}
      </div>
      <CustomButton size={"lg"}>View All Brands</CustomButton>
    </div>
  );
}
