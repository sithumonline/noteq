import { useEffect } from "react";
import { User_API } from "../../api/user";

export default function VerifyEmail() {
  var ack = "";
  useEffect(() => {
    User_API.verificationUser()
      .then((res) => {
        window.history.pushState({}, "", "/signin");
        window.location.reload();
      })
      .catch((err) => {
        ack = "Fail to verify email";
      });
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-100 tracking-widest">
              {ack}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
