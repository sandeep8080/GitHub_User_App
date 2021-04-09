//Including the fusioncharts library
import FusionCharts from 'fusioncharts';

//Including the chart type
//import iChart from 'fusioncharts/viz/column2d';
import iCharts from 'fusioncharts/fusioncharts.charts';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import ReactFC from 'react-fusioncharts';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, iCharts, FusionTheme);



//Your react component
function Chart({ data }) {
  //Creating the JSON object to store the chart configurations

  const chartConfigs = {
    type: 'column2D',// The chart type
    width: '400', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      "chart": {
        "caption": "Programming Language",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Language/Technology",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "",
        "theme": "fusion",
      },
      data,
    }
  };
  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default Chart;