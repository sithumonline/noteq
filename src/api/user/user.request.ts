import { apiInstance } from "../apiInstance";
import { signInData, signUpData } from "./user.types";
import { ApiRes } from "./user.responses";
import base64 from "base-64";

export async function signUpUser(requestData: signUpData) {
  const PATH = "/user/signup";

  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes: ApiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function signInUser(requestData: signInData) {
  const PATH = "/user/signin";

  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes: ApiRes = res.data;
    if (apiRes.data) {
      window.localStorage.removeItem("Token");
      window.localStorage.removeItem("UserId");
      window.localStorage.setItem("Token", apiRes.data.split(";")[0]);
      window.localStorage.setItem(
        "UserId",
        base64.decode(apiRes.data.split(";")[1])
      );
    }
    if (res.status === 200) {
      window.history.pushState({}, "", "/");
      window.location.reload();
    }
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function welcomeUser() {
  const PATH = "/user/welcome";

  try {
    const res = await apiInstance.get(PATH, {
      headers: {
        Authorization: window.localStorage.getItem("Token") || "",
      },
    });
    return res.status;
  } catch (e) {
    console.error(e);
  }
}

export async function verificationUser() {
  const PATH = "/user/verification/" + window.location.pathname.split("/")[3];

  try {
    const res = await apiInstance.get(PATH, {
      headers: {
        Authorization: window.location.pathname.split("/")[2] || "",
      },
    });
    const apiRes: ApiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function update(requestData: signInData) {
  const PATH = "/user/" + window.location.pathname.split("/")[2];
  var TOKEN = window.localStorage.getItem("Token") || "";
  if (window.location.pathname.split("/").length > 3) {
    TOKEN = window.location.pathname.split("/")[3];
  }

  try {
    const res = await apiInstance.put(PATH, requestData, {
      headers: {
        Authorization: TOKEN,
      },
    });
    const apiRes: ApiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function resetPassword(email: string) {
  const PATH = "/user/reset/" + base64.encode(email);

  try {
    const res = await apiInstance.get(PATH);
    return res.status;
  } catch (e) {
    console.error(e);
  }
}
