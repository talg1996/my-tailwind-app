import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chart.js/auto";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Live = () => {
  // Define chart data
  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Data Set 1",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Data Set 2",
        data: [7, 11, 5, 8, 3, 7],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to resize with its container
  };

  return (
    <div className="flex flex-wrap gap-6 p-6">
      <div className="flex-1 min-w-[250px] max-w-full">
        <h2 className="text-xl font-bold mb-4">Bar Chart 1</h2>
        <div className="relative h-64 md:h-80">
          <Bar data={data1} options={options} />
        </div>
      </div>
      <div className="flex-1 min-w-[250px] max-w-full">
        <h2 className="text-xl font-bold mb-4">Bar Chart 2</h2>
        <div className="relative h-64 md:h-80">
          <Bar data={data2} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Live;
