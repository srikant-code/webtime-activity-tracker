import ApexCharts from "apexcharts";
import { useEffect } from "react";

const Chart = ({ id = "chart" }) => {
  const ShowDataLabels = false;
  useEffect(() => {
    const areaOptions = {
      chart: {
        height: 300,
        width: 300,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: ShowDataLabels,
      },
      stroke: {
        curve: "smooth",
      },
      series: [
        {
          name: "Browsing time",
          data: [45, 52, 38, 45, 19, 23, 2],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
        // categories: [
        //   "01 Jan",
        //   "02 Jan",
        //   "03 Jan",
        //   "04 Jan",
        //   "05 Jan",
        //   "06 Jan",
        //   "07 Jan",
        // ],
      },
    };
    var chart = new ApexCharts(
      document.querySelector(`#${id}chart`),
      areaOptions
    );
    chart.render();
  });
  return <div id={id + "chart"}></div>;
};
export default Chart;
