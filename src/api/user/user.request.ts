import { apiInstance } from "../apiInstance";
import { signInData, signUpData } from "./user.types";
import { ApiRes } from "./user.responses";

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
      window.localStorage.setItem("Token", apiRes.data.split(";")[0]);
      window.localStorage.setItem("UserId", apiRes.data.split(";")[1]);
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
