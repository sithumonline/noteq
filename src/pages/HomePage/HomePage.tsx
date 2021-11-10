import { useEffect } from "react";
import { User_API } from "../../api/user";

export default function HomePage() {
  useEffect(() => {
    User_API.welcomeUser()
      .then((res) => {
          window.history.pushState({}, "", "/note/" + window.localStorage.getItem("UserId"));
          window.location.reload();
      })
      .catch((e) => {
        window.history.pushState({}, "", "/signin");
        console.error(e);
      });
  });

  return (
    <div className="HomePage">
      <h1>Home Page</h1>
    </div>
  );
}
