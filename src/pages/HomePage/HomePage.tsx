import { useEffect } from "react";
import { User_API } from "../../api/user";

export default function HomePage() {
  useEffect(() => {
    User_API.welcomeUser()
      .then((res) => {
        if (res !== 200) {
          window.history.pushState({}, "", "/signin");
          window.location.reload();
        } else {
          window.history.pushState(
            {},
            "",
            "/note/" + window.localStorage.getItem("UserId")
          );
          window.location.reload();
        }
      })
      .catch((e) => {
        console.error(e);
      });
  });

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              Quick Note
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
