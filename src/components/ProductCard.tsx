import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

const ProductCard: React.FC<Product> = ({ title, description, image, price, id }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-64">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm text-center mt-1">{description}</p>
      <p className="text-blue-600 font-bold text-lg mt-3">{price}</p>
      <button
        onClick={() => addToCart({ title, description, image, price, id })}
        className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;