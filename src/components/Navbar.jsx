import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const numOfProducts = cart.length;

  return (
    <div className="min-h-16">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/vite.svg" className="h-8" alt="E-Co Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              E-Co
            </span>
          </Link>

          {/* right side */}
          <div className="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
            <div className="flex space-x-2 mr-4">
              <Link to="/login">
                <button
                  type="button"
                  aria-label="Log In"
                  className="relative text-center text-blue-700 dark:text-white text-2xl"
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle-user"
                    className="hover:dark:text-blue-500 hover:text-gray-900 duration-150"
                  />
                </button>
              </Link>
            </div>
            {/* Cart */}
            <Link to="/cart">
              <button
                type="button"
                aria-label="Go to Cart"
                className="relative text-center text-blue-700 dark:text-white text-2xl"
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-shopping-cart"
                  className="hover:dark:text-blue-500 hover:text-gray-900 duration-150"
                />
                {numOfProducts > 0 && (
                  <span className="absolute -right-1.5 -top-0.5 text-xs leading-[15px] w-4 h-4 bg-gray-900 dark:bg-blue-700 text-white rounded-full">
                    {numOfProducts}
                  </span>
                )}
              </button>
            </Link>
            <div class="flex md:order-2 space- x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                class="inline-flex items-center px-2 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open main menu</span>
                <FontAwesomeIcon icon="fa-solid fa-bars" className="text-xl" />
              </button>
            </div>
          </div>

          {/* middle */}
          <div
            className={`items-center justify-between  w-full md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
