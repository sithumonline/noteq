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
    User_API.signUpUser(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={updateForm}
          value={form.email}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={updateForm}
          value={form.password}
        />
        <br />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={updateForm}
          value={form.name}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
