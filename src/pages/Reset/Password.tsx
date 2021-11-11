import { useState } from "react";
import { User_API } from "../../api/user";

export default function ResetPassword() {
  const [form, setForm] = useState({
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
    User_API.update(form).then((res) => {
      if (window.location.pathname.split("/").length > 3) {
        window.history.pushState({}, "", "/signin");
        window.location.reload();
      }
      window.history.pushState({}, "", "/");
      window.location.reload();
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
