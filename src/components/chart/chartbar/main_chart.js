import ChartBar from "../mainchart/chart_bar";
import "./main-chart.css";

const Chart = (props) => {
  const dataValue = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataValue);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={totalMax}
          value={dataPoint.value}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
