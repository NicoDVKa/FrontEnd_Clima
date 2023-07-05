import MapComponent from "./components/mapComponent.js";
import TableComponent from "./components/tableComponent.js";
import YearsSelectComponent from "./components/yearsSelectComponent.js";
import ProvinceSelectComponent from "./components/provinceSelectComponent.js";
import ProvinceSelectComponent2  from "./components/provinceSelectComponentByYear.js";

const select = document.getElementById("years_select");

window.addEventListener("DOMContentLoaded", async ()=>{
    await YearsSelectComponent()
    MapComponent(select.value)
    TableComponent(select.value)
    ProvinceSelectComponent()
    ProvinceSelectComponent2(select.value);
})


select.addEventListener('change', ()=>{
    $('#myTable').DataTable().destroy(); 
    MapComponent(select.value)
    TableComponent(select.value)
})