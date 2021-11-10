import { apiInstance } from "../apiInstance";
import { ApiRes } from "./note.responses";

export async function signInUser() {
  const PATH = "/note/" + window.location.pathname.split("/")[2];

  try {
    const res = await apiInstance.get(PATH, {
      headers: {
        Authorization: window.localStorage.getItem("Token") || "",
      },
    });
    const apiRes: ApiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}
