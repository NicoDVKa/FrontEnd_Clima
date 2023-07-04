import VariableGraphComponent2 from "./medicionCropByYearGraphComponent.js"


const metricSelect = document.getElementById("metric_select");
const provinceSelect = document.getElementById("province_select2");
const yearSelect = document.getElementById("years_select");

provinceSelect.addEventListener("change", ()=>{    
    metricSelectComponent(provinceSelect.value, yearSelect.value);
})


const metricSelectComponent = async (ProvinceID, year) =>{
 
    metricSelect.innerHTML = `<option value="1">Rendimiento</option>
                              <option value="2">Produccion</option>
                              <option value="3">Sup. Sembrada</option>
                              <option value="4">Sup. Cosechada</option>`

    VariableGraphComponent2(ProvinceID, metricSelect.value, year);
}


export default metricSelectComponent;