import { useState } from "react";
import { User_API } from "../../api/user";

export default function SingInPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    User_API.signInUser(form).then((res) => {
      window.history.pushState({}, "", "/");
      window.location.reload();
    });
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
