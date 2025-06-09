import { Link } from "react-router-dom";

function ProductCard({ items }) {
  const { id, image, title, description, price } =  items ;
  return (
    <Link
      to={`product/${id}`}
      className="rounded-xl max-w-80 min-w-80 max-h-[600px] overflow-hidden mb-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-200 dark:bg-gray-900"
    >
      <div className="relative overflow-hidden bg-cover bg-no-repeat h-80 w-full bg-white rounded-t-xl p-3">
        <img className=" h-full m-auto" src={image} alt="" />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>

      <div className="p-6">
        <h5 className="mb-5 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title.slice(0, 25)}...
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
          {description.slice(0, 80)}...
        </p>
        <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-200 ">
          {price}$
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
