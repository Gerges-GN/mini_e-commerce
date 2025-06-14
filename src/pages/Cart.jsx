import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const numOfProducts = cart.length;

  if (cart.length == 0)
    return <h1 className=" p-5 text-3xl text-center">Your cart is empty!</h1>;

  return (
    // Just a test
    <div className="flex justify-center">
      <div className="p-5 w-full max-w-screen-xl">
        <div className="text-left">
          <h1 className=" text-3xl mb-2">Your Cart!</h1>
          <p>Total products: {numOfProducts}</p>
          <p>Total price: {totalPrice.toFixed(2)}$</p>
          <Link to="/checkout">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 border-2 border-blue-800 text-white mt-2 px-3 leading-7 rounded font-semibold"
            >
              Checkout!
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-5 py-7 ">
          {cart.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
