import { useState } from "react";
import { User_API } from "../../api/user";

export default function SingUpPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    User_API.signUpUser(form).then((res) => {
      window.history.pushState({}, "", "/verify");
      window.location.reload();
    });
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={updateForm}
                  value={form.email}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out0"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={updateForm}
                  value={form.password}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out0"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={updateForm}
                  value={form.name}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out0"
                />
              </div>
              <button type="submit" className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Sign Up</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
