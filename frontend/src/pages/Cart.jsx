import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <section className="p-6 mt-20 max-w-2xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-brand-dark">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow rounded mb-4 flex justify-between">
              <div>
                <h3 className="font-medium text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600">Quantity: 1</p>
              </div>
              <p className="font-semibold text-lg">${parseFloat(item.price).toFixed(2)}</p>
            </div>
          ))}

          {/* Total Summary */}
          <div className="text-right mb-6">
            <p className="text-lg font-bold mb-2">
              Total: ${total.toFixed(2)}
            </p>
          </div>

          {/* Payment Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Choose Payment Method:</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/pay/mpesa"
                  className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Pay with M-Pesa
                </Link>
              </li>
              <li>
                <Link
                  to="/pay/card"
                  className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Pay with Debit/Credit Card
                </Link>
              </li>
              <li>
                <Link
                  to="/pay/paypal"
                  className="block bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Pay with PayPal
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
