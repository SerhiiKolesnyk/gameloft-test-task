import { useState, useEffect } from "react";
import type { Product } from "../types/Product";
import ProductCard from "./ProductCard";

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerView(3); 
      else if (width >= 768) setItemsPerView(2); 
      else setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const prevProduct = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const nextProduct = () => {
    setCurrentIndex((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  const visibleProducts = [];
  for (let i = 0; i < itemsPerView; i++) {
    visibleProducts.push(products[(currentIndex + i) % products.length]);
  }

  return (
    <div className="flex flex-col items-center space-y-4 w-full px-4">
      <div className="flex gap-4 w-full justify-center">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="flex space-x-4 mt-4">
        <button
          onClick={prevProduct}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={nextProduct}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>

      <p className="text-gray-500 mt-2">
        {currentIndex + 1} / {products.length}
      </p>
    </div>
  );
};

export default Carousel;