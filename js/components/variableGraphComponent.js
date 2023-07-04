import { fetchMedicionesByProvince } from "../services/fetchMedicionesByProvince.js";


const cropSelect = document.getElementById("crop_select");
const provinceSelect = document.getElementById("province_select");


cropSelect.addEventListener("change", () => {
  VariableGraphComponent(provinceSelect.value, cropSelect.value);
});


const VariableGraphComponent = async (ProvinceID, CropID) => {
  const data = await fetchMedicionesByProvince(ProvinceID, CropID);

  const dataRendimientoGraph = [];
  const dataProduccionGraph = []
  const dataSupSembradaGraph = []
  const dataSupCosechadaGraph = []
  data.map((i) => dataRendimientoGraph.push([i.anio.toString(), parseInt(i.rendimiento.toFixed(2))]));
  data.map((i) => dataProduccionGraph.push([i.anio.toString(), parseInt(i.produccion.toFixed(2))]));
  data.map((i) => dataSupSembradaGraph.push([i.anio.toString(), parseInt(i.sup_sembrada.toFixed(2))]));
  data.map((i) => dataSupCosechadaGraph.push([i.anio.toString(), parseInt(i.sup_cosechada.toFixed(2))]));


  const chart = JSC.chart("grafico_variable", {
    xAxis: {
      crosshair_enabled: true,
      scale: { type: 'time' } 
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
        name: "Rendimiento",
        points: dataRendimientoGraph,
      },
      { 
        name: "Producción", 
        points: dataProduccionGraph
      }, 
      { 
        name: "Superficie Sembrada", 
        points: dataSupSembradaGraph
      }, 
      { 
        name: "Superficie Cosechada", 
        points: dataSupCosechadaGraph
      }, 
    ],
    title_label_text:
      data[0].cultivo_desc +
      " en " +
      data[0].provincia_desc,
    yAxis: { formatString: "" },
  });
};

export default VariableGraphComponent;
