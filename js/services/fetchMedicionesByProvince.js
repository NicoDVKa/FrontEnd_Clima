import { BASE_URL } from "../../config/config.js";

export const fetchMedicionesByProvince = async (ProvinceID, CropID) => {
  try {
    let res ;

    if (ProvinceID && CropID) {
      res = await fetch(
        BASE_URL+"/cultivo/medicion?province=" + ProvinceID + "&crop=" + CropID
      );
    }else{
      res = await fetch(
        BASE_URL+"/cultivo/medicion?province=" + ProvinceID 
      );
    }
 
    if (res.status == 200) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};