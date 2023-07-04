import { fetchMedicionesByYearAndProvince } from "../services/fetchMedicionesByYear.js";

const metricSelect = document.getElementById("metric_select");
const provinceSelect = document.getElementById("province_select2");
const yearSelect = document.getElementById("years_select");

metricSelect.addEventListener("change", () => {
  VariableGraphComponent2(provinceSelect.value, metricSelect.value, yearSelect.value);
});


const VariableGraphComponent2 = async (ProvinceID, Metric, yearSelect) => {

// //Vemos que hacemos aca 
  yearSelect = document.getElementById("years_select").value;

 document.getElementById("year_h5").innerText = "Año : " + yearSelect;

  const data = await fetchMedicionesByYearAndProvince(yearSelect, ProvinceID);
  let metricStr = "";

  const dataGraph = [];

  if(Metric == 1){
    metricStr = "Rendimiento";
    data.map((i) => dataGraph.push([i.cultivo_desc.toString(), parseInt(i.rendimiento.toFixed(2))]));
  }
  else if (Metric == 2){
    metricStr = "Produccion";
    data.map((i) => dataGraph.push([i.cultivo_desc.toString(), parseInt(i.produccion.toFixed(2))]));
  }
  else if (Metric == 3){
    metricStr = "Superficie Sembrada";
    data.map((i) => dataGraph.push([i.cultivo_desc.toString(), parseInt(i.sup_sembrada.toFixed(2))]));
  }else{
    metricStr = "Superficie Cosechada";
    data.map((i) => dataGraph.push([i.cultivo_desc.toString(), parseInt(i.sup_cosechada.toFixed(2))]));
  }


  const chart = JSC.chart("grafico_variable1", {
    xAxis: {
      crosshair_enabled: true,
      scale: { type: 'cultivo' } 
    },
    legend_position: "bottom right",
    defaultSeries: {
      type: "line",
      line: {
        width: 2,
        caps_end: { type: "arrow", size: "600%" },
      },
      opacity: 1,
      lastPoint_marker_visible: false,
      defaultPoint_marker: {
        fill: "lightenMore",
        outline: { width: 1 },
      },
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
