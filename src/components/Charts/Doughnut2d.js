//Including the fusioncharts library
import FusionCharts from 'fusioncharts';

//Including the chart type
//import iChart from 'fusioncharts/viz/column2d';
import iCharts from 'fusioncharts/fusioncharts.charts';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

import ReactFC from 'react-fusioncharts';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, iCharts, FusionTheme);



//Your react component
function Pie3D({ data }) {
  //Creating the JSON object to store the chart configurations

  const chartConfigs = {
    type: 'doughnut2d',// The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      "chart": {
        "caption": "Stars Per Languages",        
        "theme": "candy",
        "showPercentValues":"false"
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

export default Pie3D;