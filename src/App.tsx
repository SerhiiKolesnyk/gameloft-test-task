import Carousel from "./components/Carousel";
import ShoppingCart from "./components/ShoppingCart";
import { CartProvider } from "./context/CartContext";
import { products } from "./data/products";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Carousel products={products} />
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}

export default App;