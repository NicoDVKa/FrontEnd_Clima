import { fetchYears } from "../services/fetchYears.js"

const select = document.getElementById("years_select")

const YearsSelectComponent = async () =>{
 const years = await fetchYears()
 years.reverse()
 select.innerHTML = ""
 years.forEach( i =>  select.innerHTML += `<option value="${i.anio}">${i.anio}</option>`)

}

export default YearsSelectComponent