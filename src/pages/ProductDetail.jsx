import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  const [fav, setFav] = useState(false)

  const product = products.find((p) => p.id == id);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-dvh text-5xl ">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) return <p className="text-red-500 text-3xl p-5">Error: {error}</p>;

  if (!product) return <p>404. Product Not Found</p>;

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased min-h-dvh">
      <div className="max-w-screen-xl px-4 m-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto p-7 bg-white rounded-2xl">
            <img className="w-full " src={product.image} alt={product.title} />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                {product.price}$
              </p>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <button
                onClick={() => setFav(!fav)}
                className="flex items-center justify-center gap-1.5 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-heart"
                  className={`${fav && "text-red-500"}  text-lg`}
                />
                Add to favorites
              </button>

              <button
                onClick={() => addToCart(product)}
                className="flex items-center justify-center gap-1.5 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none rounded-lg hover:text-primary-700 focus:z-10 focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:text-white "
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-cart-shopping"
                  className="text-lg"
                />
                Add to cart
              </button>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
