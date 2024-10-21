import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import CartContext from "../context/CartContext";

function Product() {
  const [product, setProduct] = useState([]);

  const { addToCart } = useContext(CartContext);


  const { id } = useParams();

  const apiCall = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(function (response) {
        if (response.status === 200) {
          setProduct(response.data);
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
      <div className="max-w-5xl mx-auto p-6 mt-20">
        <h1 className="text-center text-4xl font-semibold text-black mb-8 capitalize">
          {product.category}
        </h1>

        <div className="m-4 p-6 border-2 rounded-xl border-blue-200 shadow-lg flex flex-col lg:flex-row lg:justify-between bg-transparent">
          {/* Left section with image and title */}
          <div className="flex flex-col items-center">
            <img
              className="w-[200px] h-[200px]  mb-5 rounded-lg"
              src={product.image}
              alt={product.title}
            />
            <h1 className="text-3xl font-semibold text-black text-center w-[300px]">
              {product.title}
            </h1>
          </div>

          {/* Right section with description and price */}
          <div className="flex-1 lg:ml-10 mt-6 lg:mt-0">
            <h1 className="text-xl lg:text-2xl text-black leading-relaxed mb-4">
              {product.description}
            </h1>
            <p className="text-2xl text-black font-semibold mb-4">
              Price: <b className="font-bold">${product.price}</b>
            </p>
            <Link to={"/Cart"}>
              <button
                onClick={() => addItem(product.id)}
                className="px-4 py-2 bg-yellow-600 rounded-lg text-white hover:bg-yellow-700 transition-colors duration-200"
              >
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
