import { apiInstance } from "../apiInstance";
import { ApiRes } from "./note.responses";

export async function getNotes() {
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

export async function getNote() {
    const PATH = "/note/" + window.location.pathname.split("/")[2] + "/" + window.location.pathname.split("/")[3];
  
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
