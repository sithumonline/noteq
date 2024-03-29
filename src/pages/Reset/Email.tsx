import { useState } from "react";
import { User_API } from "../../api/user";

export default function ResetPasswordByEmail() {
  const [form, setForm] = useState({
    email: "",
  });

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    User_API.resetPassword(form.email).then((res) => {
      window.history.pushState({}, "", "/");
      window.location.reload();
    });
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
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
              <button
                type="submit"
                className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
