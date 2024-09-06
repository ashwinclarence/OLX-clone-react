type ProductCard = {
  name: string;
  description: string;
  image: string;
  price: number;
};
const ProductCard = ({ description, image, name, price }: ProductCard) => {
  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden border-2 cursor-pointer">
      <div className="h-80 relative">
        <div className="rounded-full bg-white border absolute right-2 top-2 h-8 w-8 flex items-center justify-center ">
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="h-44 bg-gray-100 flex items-center justify-center">
          <img src={image} alt={name} className="object-contain" />
        </div>
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            &#8377; {price.toLocaleString()}
          </h1>
          <h6 className="text-gray-600 mb-1">{name}</h6>
          <p className="text-gray-500 text-sm truncate">{description}</p>
          <div className="capitalize flex justify-between text-gray-500 text-sm mt-2">
            <p>place</p>
            <p>today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
