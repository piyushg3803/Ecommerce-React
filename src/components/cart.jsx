import { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { data } = useContext(CartContext);
  const { setitemNum } = useContext(CartContext);

  // Function to update the quantity of an item
  const updateQuantity = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedItems);
  };

  // API call to fetch cart items from fake store API
  const apiCall = async () => {
    try {
      const productPromises = data.map((id) =>
        axios.get(`https://fakestoreapi.com/products/${id}`)
      );

      const responses = await Promise.all(productPromises);
      const products = responses.map((response) => ({
        ...response.data,
        quantity: 1, // Initialize quantity as 1 for each item
      }));
      setCartItems(products);
      console.log("Fetched cart items", products);
    } catch (error) {
      console.log("Error fetching cart items", error);
    }
  };

  // Fetch cart items on component mount
  useEffect(() => {
    if (data.length > 0) {
      apiCall();
    }
  }, [data]);

  // Update item count whenever cartItems change
  useEffect(() => {
    setitemNum(cartItems.length);
  }, [cartItems, setitemNum]);

  // Remove item from cart
  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Calculate total price based on the item quantity and price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-20 m-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-medium text-center mb-8 text-black">
        Your Cart
      </h1>

      <div className="grid grid-cols-1 gap-6">
        {cartItems.length === 0 ? (
          <>
            <p className="text-xl text-black text-center">Your cart is empty.</p>
            <Link to={"/"} className="m-auto">
              <button className="bg-blue-600 rounded-xl p-3 text-white w-[100%]">
                Add Items
              </button>
            </Link>
          </>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-5 border-2 border-blue-200 rounded-xl bg-blue-50"
            >
              <img
                className="w-[150px] h-[150px] mr-6"
                src={item.image}
                alt={item.title}
              />
              <div className="flex-1">
                <h2 className="text-2xl font-medium mb-2 text-black line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-lg text-black mb-2">
                  Price: <b>${item.price.toFixed(2)}</b>
                </p>
                <div className="flex items-center space-x-4">
                  <label htmlFor={`quantity-${item.id}`} className="text-black">
                    Quantity:
                  </label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                    className="w-16 text-center border border-blue-300 rounded-md"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600 transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 p-5 border-t-2 border-blue-200">
          <h2 className="text-2xl font-medium text-black">
            Total: <b>${totalPrice.toFixed(2)}</b>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
