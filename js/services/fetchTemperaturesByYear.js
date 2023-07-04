import { BASE_URL } from "../../config/config.js";

export const fetchTemperaturesByYear = async (year) => {
  try {
    const res = await fetch(
      BASE_URL+"/provincia/temperatura?year=" +year
    );

    if (res.status == 200) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};
