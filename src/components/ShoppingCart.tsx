import { useState } from "react";
import { useCart } from "../context/CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart, totalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        🛒
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="mt-2 w-72 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-500 text-sm">
                        {item.quantity} × {item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              <hr className="my-2" />
              <p className="font-bold text-lg">Total: ${totalPrice().toFixed(2)}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;