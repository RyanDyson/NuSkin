import Image from "next/image";

export function CustomerPicks() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Image src="https://via.placeholder.com/150" alt="Product" />
        <div className="text-center">
          <p>Product Name</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}
