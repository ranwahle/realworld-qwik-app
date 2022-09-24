import axios from "axios";
import { BASE_URL } from "~/common/api";

declare const localStorage: any;

export const getUser = async () => {
  try {
    if (!localStorage) {
      return null;
    }
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

export const getAuthToken = () => `Token ${localStorage.getItem("token")}`;
