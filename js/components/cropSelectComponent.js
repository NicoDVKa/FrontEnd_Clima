import { fetchMedicionesByProvince } from "../services/fetchMedicionesByProvince.js"
import VariableGraphComponent from "./variableGraphComponent.js"


const cropSelect = document.getElementById("crop_select")
const provinceSelect = document.getElementById("province_select")

provinceSelect.addEventListener("change", ()=>{    
    CropSelectComponent(provinceSelect.value)
   })


const CropSelectComponent = async (ProvinceID) =>{
 const mediciones = await fetchMedicionesByProvince(ProvinceID)
const crops = []

mediciones.map(i => crops.push({desc: i.cultivo_desc, id: i.id}))

const uniqueCrops = [...new Map(crops.map(i => [i.id, i])).values()]

cropSelect.innerHTML = ""
 uniqueCrops.forEach( i =>  cropSelect.innerHTML += `<option value="${i.id}">${i.desc}</option>`)

 VariableGraphComponent(ProvinceID, cropSelect.value)
}




export default CropSelectComponent