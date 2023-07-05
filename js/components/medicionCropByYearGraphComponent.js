import { fetchMedicionesByYearAndProvince } from "../services/fetchMedicionesByYear.js";

const metricSelect = document.getElementById("metric_select");
const provinceSelect = document.getElementById("province_select2");
const yearSelect = document.getElementById("years_select");

metricSelect.addEventListener("change", () => {
  VariableGraphComponent2(provinceSelect.value, metricSelect.value, yearSelect.value);
});


const VariableGraphComponent2 = async (ProvinceID, Metric, yearSelect) => {

 
  yearSelect = document.getElementById("years_select").value;

 document.getElementById("year_h5").innerText = "Año : " + yearSelect;

  const data = await fetchMedicionesByYearAndProvince(yearSelect, ProvinceID);
  let metricStr = "";

  const dataGraph = [];

  if(Metric == 1){
    metricStr = "Rendimiento";
    data.sort((a,b) => b.rendimiento-a.rendimiento).map((i) => dataGraph.push([i.cultivo_desc.toString(), parseInt(i.rendimiento.toFixed(2))]));
    dataGraph.sort( (a,b) =>  a.rendimiento - b.rendimiento);
  }
  else if (Metric == 2){
    metricStr = "Produccion";
    data.sort((a,b) => b.produccion-a.produccion).map((i) => dataGraph.push([i.cultivo_desc.toString(), parseInt(i.produccion.toFixed(2))]));
  }
  else if (Metric == 3){
    metricStr = "Superficie Sembrada";
    data.sort((a,b) => b.sup_sembrada-a.sup_sembrada).map((i) => dataGraph.push([i.cultivo_desc.toString(), parseInt(i.sup_sembrada.toFixed(2))]));
  }else{
    metricStr = "Superficie Cosechada";
    data.sort((a,b) => b.sup_cosechada-a.sup_cosechada).map((i) => dataGraph.push([i.cultivo_desc.toString(), parseInt(i.sup_cosechada.toFixed(2))]));
  }


  const chart = JSC.chart("grafico_variable1", {
    xAxis: {
      crosshair_enabled: true,
      scale: { type: 'cultivo' } 
    },
    defaultSeries: {
      type: "horizontalColumn",    
    },
    series: [
      {
        name: metricStr,
        points: dataGraph,
      }
    ],
    
    yAxis: { formatString: "" },
  });
};

export default VariableGraphComponent2;

