import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
    "mb-4 p-2 pl-4 rounded-lg outline-1 hover:outline-2 outline-gray-900 bg-white";

  return (
    <main className="min-h-[calc(100vh-64px)]">
      <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-center gap-10 px-7 max-w-screen-xl mx-auto min-h-[calc(100vh-64px)]">
        <section className="flex flex-col items-center lg:p-7 sm:w-1/2 w-full max-w-[450px]">
          <header className="text-gray-900 font-semibold text-3xl text-center w-full my-5">
            <h1>Log In</h1>
          </header>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full py-4 rounded-lg"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={inputClass}
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className={inputClass}
              onChange={handleChange}
              value={formData.name}
            />
            <div className="flex gap-3 *:duration-150">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 border-2 border-blue-800 text-white p-2 w-1/2 rounded-lg font-semibold"
              >
                Log in
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-red-500 hover:bg-red-700 border-2 border-red-800 text-white p-2 w-1/2 rounded-lg font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
          <div className="w-full text-left flex flex-wrap text-sm">
            <p>New user?</p>
            <Link
              to="/sign-up"
              className="ml-1.5 font-semibold hover:text-blue-500 duration-150"
            >
              Create account now!
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
