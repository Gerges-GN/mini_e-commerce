import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    // Just a test
    <div>
      <h1>Your Cart</h1>
      {cart.map((item, i) => (
        <div key={i}>
          {item.title} - ${item.price}
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}
