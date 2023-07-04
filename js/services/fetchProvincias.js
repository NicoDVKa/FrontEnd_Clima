import { BASE_URL } from "../../config/config.js";

export const fetchProvincias = async () => {
  try {
    const res = await fetch(
      BASE_URL+"/provincia"
    );

    if (res.status == 200) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};