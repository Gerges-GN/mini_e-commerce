import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { id, image, title, description, price } = product;
  const {addToCart} = useCart();

  return (
    <div className="rounded-xl max-w-80 sm:min-w-80 max-h-[600px] mb-5 drop-shadow-gray-300 hover:drop-shadow-gray-400 drop-shadow-xl duration-150 bg-neutral-200 dark:bg-gray-900">
      <Link to={`product/${id}`}>
        <div className="overflow-hidden h-80 w-full bg-white rounded-t-xl p-3">
          <img className=" h-full m-auto" src={image} alt="" />
        </div>

        <div className="px-6 pt-6">
          <h5 className="mb-5 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title.slice(0, 25)}...
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
            {description.slice(0, 80)}...
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-between px-6 pb-6">
        <p className="text-lg text-gray-900 dark:text-white ">{price}$</p>
        <button
          onClick={() => addToCart(product)}
          className="flex items-center justify-center text-2xl text-gray-900 dark:text-white hover:text-blue-600 duration-150"
        >
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
