import axios from "axios";
import { BASE_URL } from "~/common/api";

declare const localStorage: any;
let tempToken = "";
export const storeToken = (token: string) => {
  localStorage.setItem("token", token);
  setCookie("token", token);
};

export interface UserData {
  username: string;
  image: string;
}

export const getUser: () => UserData | Promise<UserData> = async () => {
  try {
    const response = await axios.get(`${BASE_URL}user`, {
      headers: {
        authorization: getAuthToken(),
      },
    });

    return response.data.user;
  } catch {
    return null;
  }
};

export const saveTempCookie = (token: string) => {
  tempToken = token;
  setCookie("token", token);
};
