import { BASE_URL } from "../../config/config.js";

export const fetchMedicionesCountrywide = async () => {
  try {
    const res = await fetch(
      BASE_URL+"/cultivo/medicion"
    );

    if (res.status == 200) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};