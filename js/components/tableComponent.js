import { fetchMedicionesByYear } from "../services/fetchMedicionesByYear.js";

const table_body = document.getElementById("table_body")


const TableComponent = async (year) =>{
   
    const mediciones = await fetchMedicionesByYear(year)
    table_body.innerHTML = ""
   mediciones.forEach(i =>  table_body.innerHTML += `  <tr>
   <td>${i.provincia_desc}</td>
   <td>${i.cultivo_desc}</td>
   <td>${i.rendimiento.toFixed(2)}</td>
   <td>${i.produccion.toFixed(2)}</td>
   <td>${i.sup_sembrada.toFixed(2)}</td>
   <td>${i.sup_cosechada.toFixed(2)}</td>
</tr>`)
 $('#myTable').DataTable(); 

}

export default TableComponent