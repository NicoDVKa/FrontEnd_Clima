import { BASE_URL } from "../../config/config.js";

export const fetchYears = async () => {
  try {
    const res = await fetch(
      BASE_URL+"/anio" 
    );

    if (res.status == 200) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};
