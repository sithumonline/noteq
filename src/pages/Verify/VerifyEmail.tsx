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
    <div>
      <h1>{ack}</h1>
    </div>
  );
}
