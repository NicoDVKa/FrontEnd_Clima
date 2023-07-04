import { BASE_URL } from "../../config/config.js";

export const fetchMedicionesByYear = async (year) => {
  try {
    const res = await fetch(
      BASE_URL+"/cultivo/medicion/" + year
    );

    if (res.status == 200) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};


export const fetchMedicionesByYearAndProvince = async (year, province) => {
  try {
    const res = await fetch(
      BASE_URL+"/cultivo/medicion/" + year + "?province=" + province
    );

    if (res.status == 200) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};