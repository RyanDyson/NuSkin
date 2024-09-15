export function ProductCard() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img src="https://via.placeholder.com/150" alt="Product" />
        <div className="text-center">
          <p>Product Name</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}
