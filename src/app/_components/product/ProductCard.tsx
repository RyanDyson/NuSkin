import Image, { type StaticImageData } from "next/image";
import Demo1 from "~/../public/product/Npure/demo1.jpg";

type ProductCardProps = {
  product?: {
    name: string;
    price: number;
    image: string | StaticImageData;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Image
          src={product?.image ?? Demo1}
          alt="Product"
          width={150}
          height={150}
        />
        <div className="text-center">
          <p>{product?.name}</p>
          <p>{product?.price}</p>
        </div>
      </div>
    </div>
  );
}
