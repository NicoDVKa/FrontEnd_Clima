import { fetchTemperaturesByYear } from "../services/fetchTemperaturesByYear.js";

const MapComponent = async (year) => {
  let temps = await fetchTemperaturesByYear(year);

  var mapData = [
    ['BA', temps[1].temperatura],
    ['DF', temps[2].temperatura],
    ['CT', temps[3].temperatura],
    ['CC', temps[4].temperatura],
    ['CH', temps[5].temperatura],
    ['CB', temps[6].temperatura],
    ['CN', temps[7].temperatura],
    ['ER', temps[8].temperatura],
    ['FM', temps[9].temperatura],
    ['JY', temps[10].temperatura],
    ['LP', temps[11].temperatura],
    ['LR', temps[12].temperatura],
    ['MZ', temps[13].temperatura],
    ['MN', temps[14].temperatura],
    ['NQ', temps[15].temperatura],
    ['RN', temps[16].temperatura],
    ['SA', temps[17].temperatura],
    ['SJ', temps[18].temperatura],
    ['SL', temps[19].temperatura],
    ['SC', temps[20].temperatura],
    ['SF', temps[21].temperatura],
    ['SE', temps[22].temperatura],
    ['TF', temps[23].temperatura],
    ['TM', temps[24].temperatura],
  ];

  var chart = JSC.chart('chartDiv', {
    type: 'map',
    debug: false,
    title_label_text: 'Temperatura anual promedio por provincia',
    palette: {
      /* A function to get the point value performs better. */
      pointValue: function(p) {
        return p.options('z');
      },
      colors: ['#C4FFFF', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#b00026'],
      ranges: { min: -10, max: 35, interval: 2.5 }
    },
    legend_title_label_text: '                                                        ',

    defaultPoint: {
      label_text: '%stateCode',
      tooltip: '<b>%name</b> <br/>Temperatura promedio: %zValue C°'
    },

    /* Pad the map data points for separation from the chart area boundary. */
    defaultSeries_shape_padding: 0.02,
    series: [
      {
        map: 'ar',
        points: mapData.map((arrItem)=> {
          return {
            map: 'AR.' + arrItem[0],
            z: arrItem[1]
          };
        })
      }
    ]
  });
}

export default MapComponent;
