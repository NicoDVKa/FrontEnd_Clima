import { fetchProvincias } from "../services/fetchProvincias.js"
import metricSelectComponent from "./metricSelectComponent.js"

const select = document.getElementById("province_select2")
const yearSelect = document.getElementById("years_select");

yearSelect.addEventListener("change", ()=>{    
    ProvinceSelectComponent2(yearSelect.value);
})


const ProvinceSelectComponent2 = async (year) =>{
 const provinces = await fetchProvincias()
 console.log(provinces);
 select.innerHTML = ""
 provinces.forEach( i =>  select.innerHTML += `<option value="${i.id}">${i.desc}</option>`)

 metricSelectComponent(select.value, year);
}

export default ProvinceSelectComponent2;