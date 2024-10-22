import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

function Navbar() {

  const [btnClicked, setbtnClicked] = useState(false)

  const click = () =>{
    setbtnClicked((prev) => !prev)
  }

  const {itemNum} = useContext(CartContext)

  return (
    <nav className="bg-blue-50 border-b shadow-md fixed w-full top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="mt-3 flex">
            <h1 className="flex-shrink-0 text-black text-2xl font-semibold">
              MyStore
            </h1>
          </div>
          <div className="mt-3 hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to=""
              className="text-black-700 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black-700 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              About Us
            </Link>
            <Link
              to="/Cart"
              className="text-black-700 hover:text-gray-700  px-3 py-2 rounded-md text-lg font-medium"
            >
              <i className="fa-solid fa-cart-shopping me-2"></i>
              {itemNum}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
            onClick={click}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Icon when menu is open */}
              {/* Add a state for the menu and update the icon when open */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible on smaller screens) */}
      <div className={`sm:hidden ${btnClicked ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1" >
          <Link
            to=""
            className="block text-black hover:bg-blue-100 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-black hover:bg-blue-100 px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </Link>
          <Link
            to="/Cart"
            className="block text-black hover:bg-blue-100 px-3 py-2 rounded-md text-base font-medium"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
