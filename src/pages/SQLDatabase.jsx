import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DroneDashboard = () => {
  const [sqlData, setSqlData] = useState([]);
  const [liveData, setLiveData] = useState({ DronesDetectedCam1: 0, DronesDetectedCam2: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sqlResponse = await fetch('http://localhost:5000/sql_data');
        const sqlResult = await sqlResponse.json();
        setSqlData(sqlResult.reverse());  // Reverse to show most recent first

        const liveResponse = await fetch('http://localhost:5000/live_data');
        const liveResult = await liveResponse.json();
        setLiveData(liveResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 100);  // Update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const sqlChartData = {
    labels: sqlData.map(item => new Date(item.DateTime).toLocaleTimeString()),
    datasets: [
      {
        label: 'Drones Detected',
        data: sqlData.map(item => item.DronesDetected),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const liveChartData = {
    labels: ['Camera 1', 'Camera 2'],
    datasets: [
      {
        label: 'Live Drone Detection',
        data: [liveData.DronesDetectedCam1, liveData.DronesDetectedCam2],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="flex flex-wrap gap-6 p-6">
      <div className="flex-1 min-w-[250px] max-w-full">
        <h2 className="text-xl font-bold mb-4">Historical Drone Detection (Last 5 Samples)</h2>
        <div className="relative h-64 md:h-80">
          <Bar data={sqlChartData} options={options} />
        </div>
      </div>
      <div className="flex-1 min-w-[250px] max-w-full">
        <h2 className="text-xl font-bold mb-4">Live Drone Detection</h2>
        <div className="relative h-64 md:h-80">
          <Bar data={liveChartData} options={options} />
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-xl font-bold mb-4">Live Video Feeds</h2>
        <div className="flex gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Camera 1</h3>
            <img src="http://localhost:5000/live_stream_0" alt="Camera 1 Feed" className="w-full" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Camera 2</h3>
            <img src="http://localhost:5000/live_stream_1" alt="Camera 2 Feed" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneDashboard;