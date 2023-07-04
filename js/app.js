import MapComponent from "./components/mapComponent.js";
import TableComponent from "./components/tableComponent.js";
import YearsSelectComponent from "./components/yearsSelectComponent.js";
import RendimientoPorAñoGraph from "./components/rendimientoByYearGraphComponent.js";
import ProvinceSelectComponent from "./components/provinceSelectComponent.js";
import CropSelectComponent from "./components/cropSelectComponent.js";

const select = document.getElementById("years_select")

window.addEventListener("DOMContentLoaded", async ()=>{
    await YearsSelectComponent()
    MapComponent(select.value)
    TableComponent(select.value)
    ProvinceSelectComponent()
    // RendimientoPorAñoGraph()
})


select.addEventListener('change', ()=>{
    $('#myTable').DataTable().destroy(); 
    MapComponent(select.value)
    TableComponent(select.value)
})