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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
