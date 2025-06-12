import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  // const total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(cart)
  if (cart.length == 0) return (<h1 className=" p-5 text-3xl">Your Cart is empty!</h1>)
  return (
    // Just a test
    <>
    <h1 className=" p-5 text-3xl">Your Cart!</h1>
    <div className="flex flex-wrap items-center justify-center gap-5 py-7 ">
      {cart.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
      </>
  );
}
