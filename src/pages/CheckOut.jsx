import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckOut() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  const handleCancel = () => {
    setFormData({ name: "", address: "", phone: "" });
  };

  const inputClass =
    "mb-4 p-2 dark:bg-[#eee] rounded-lg focus:outline-3 hover:outline-3 outline-blue-500";

  return (
    <main className="dark:bg-gray-900 min-h-[calc(100vh-64px)]">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-10 px-7 max-w-screen-xl mx-auto min-h-[calc(100vh-64px)]">
        
        <section className="flex flex-col items-center lg:p-7 sm:w-1/2 w-full">
          <header className="dark:text-white text-3xl text-left w-full my-7 md:max-w-[400px]">
            <h1>Check Out Form</h1>
          </header>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:max-w-[400px] py-4 rounded-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className={inputClass}
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              className={inputClass}
              onChange={handleChange}
              value={formData.address}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              required
              className={inputClass}
              onChange={handleChange}
              value={formData.phone}
            />

            <div className="flex gap-3 *:duration-150">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 w-1/2 rounded-lg"
              >
                CheckOut
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-red-500 hover:bg-red-700 text-white p-2 w-1/2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>

        {/* Cart Summary Section */}
        <section className="bg-gray-100 md:w-[500px] h-[500px] px-5 py-3 my-10 rounded-lg flex flex-col">
          <div>
            <h2 className="font-semibold text-xl mb-0.5">Your Cart:</h2>
            <hr />
          </div>

          <div className="flex-1 overflow-y-auto my-3 pr-1">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-1.5 *:pt-2 *:pb-0.5 border-b"
              >
                <p className="col-span-10 border-r">{item.title}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-10 gap-1.5 *:pt-2 *:pb-0.5 text-lg font-semibold">
            <p className="col-span-8 border-r">Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
