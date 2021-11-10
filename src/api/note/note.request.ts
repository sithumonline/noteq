import { apiInstance } from "../apiInstance";
import { ApiRes } from "./note.responses";
import { noteData } from "./note.types";

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
  const PATH =
    "/note/" +
    window.location.pathname.split("/")[2] +
    "/" +
    window.location.pathname.split("/")[3];

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

export async function create(requestData: noteData) {
  const PATH = "/note/" + window.location.pathname.split("/")[2];

  try {
    const res = await apiInstance.post(PATH, requestData, {
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

export async function update(requestData: noteData) {
  const PATH =
    "/note/" + window.location.pathname.split("/")[2] + "/" + requestData.ID;

  try {
    const res = await apiInstance.put(PATH, requestData, {
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

export async function remove(id: string) {
  const PATH =
    "/note/" + window.location.pathname.split("/")[2] + "/" + id;

  try {
    const res = await apiInstance.delete(PATH, {
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
