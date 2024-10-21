import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

function ProductList() {
  const [products, setProducts] = useState([]);

  const { addToCart } = useContext(CartContext);

  const apiCall = () => {
    axios
      .get(`https://fakestoreapi.com/products/`)
      .then(function (response) {
        if (response.status === 200) {
          setProducts(response.data);
          console.log("fetched");
        }

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);

  const addItem = (productId) => {
    addToCart(productId);
    console.log("getting id", productId);
  };

  return (
    <>
      <div> 
        <ul
          key={products.id}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
        >
          {products.map((product) => (
            <li
              className="mb-5 p-5 border-2 border-blue-200 rounded-xl hover:shadow-lg transition-shadow duration-300"
              key={product.id}
            >
              <Link to={`/Product/${product.id}`}>
                <img
                  className="w-[200px] h-[200px] mb-3 m-auto"
                  src={product.image}
                  alt={product.title}
                />
                <h1 className="text-2xl mb-2 font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                  {product.title}
                </h1>

                <p className="text-2xl mb-2 font-normal">
                  Price: <b>${product.price}</b>
                </p>
              </Link>
              <div className="flex justify-start items-center">
                <button className="px-4 py-2 me-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200">
                  Buy
                </button>
                <Link to={"/Cart"}>
                <button
                  onClick={() => addItem(product.id)}
                  className="px-4 py-2 bg-yellow-600 rounded-lg text-white hover:bg-yellow-700 transition-colors duration-200"
                >
                  Add To Cart
                </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
