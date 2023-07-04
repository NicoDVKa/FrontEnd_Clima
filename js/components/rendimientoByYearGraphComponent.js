import { fetchMedicionesCountrywide } from "../services/fetchMedicionesCountrywide.js";

const RendimientoPorAñoGraph = async () => {
  const data = await fetchMedicionesCountrywide();
  console.log(data);

  const dataGraph = [];

  for (let i = 0; i < data.length; i++) {
    const cropFound = dataGraph.find((crop) => crop.name == data[i].cultivo_desc);
    
    if (!cropFound) {
      dataGraph.push({
        name: data[i].cultivo_desc,
        points: [],
      });
    }
  }

  for (let i = 0; i < dataGraph.length; i++) {
    for (let j = 0; j < data.length; j++) {
    if (dataGraph[i].name == data[j].cultivo_desc ) {
        dataGraph[i].points.push([data[j].anio, parseInt(data[j].rendimiento.toFixed(2))])
    }
   } 
  }

  const dataTest = dataGraph[0]
  console.log(dataGraph[0]);
  let chart = JSC.chart("rendimiento_por_año", {
    xAxis: {
      crosshair_enabled: true,
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

    series: dataGraph,

    title_label_text: "Costs (Last 6 Months)",
    yAxis: { formatString: "" },
  });
};

export default RendimientoPorAñoGraph;
