function ProductCard({ prop }) {
  return (
    <div className="block rounded-xl max-w-80 min-w-80 max-h-[600px] overflow-hidden  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="relative overflow-hidden bg-cover bg-no-repeat h-80 w-full bg-white rounded-t-xl">
        <img className=" h-full m-auto" src={prop.image} alt="" />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>

      <div className="p-6">
        <h5 className="mb-5 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {prop.title.slice(0, 25)}...
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
          {prop.description.slice(0, 80)}...
        </p>
        <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-200 ">
          {prop.price}$
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
