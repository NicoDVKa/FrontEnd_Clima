import { fetchProvincias } from "../services/fetchProvincias.js"
import CropSelectComponent from "./cropSelectComponent.js"

const select = document.getElementById("province_select")

const ProvinceSelectComponent = async () =>{
 const provinces = await fetchProvincias()
console.log(provinces);
 select.innerHTML = ""
 provinces.forEach( i =>  select.innerHTML += `<option value="${i.id}">${i.desc}</option>`)

 CropSelectComponent(select.value)
}

export default ProvinceSelectComponent