import React, { useState, useEffect, useCallback } from "react";
import { GiDeliveryDrone } from "react-icons/gi";
import { AiOutlineSound } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import axios from "axios";

const DetailsCard = () => {
  const [droneCounts, setDroneCounts] = useState({
    DronesDetectedCam1: 0,
    DronesDetectedCam2: 0,
  });

  const [isIntervalRunning, setIsIntervalRunning] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/live_data");
      setDroneCounts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    let intervalId;

    if (isIntervalRunning) {
      intervalId = setInterval(fetchData, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isIntervalRunning, fetchData]);

  const toggleInterval = () => {
    setIsIntervalRunning((prev) => !prev);
  };

  const DetailItem = ({ label, value, icon: Icon, color }) => (
    <div className="mb-4 flex items-center justify-between text-gray-600">
      {label}
      <span className="flex items-center space-x-2">
        <span>{value}</span>
        <Icon className={`text-xl ${color}`} />
      </span>
    </div>
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mx-auto my-4 max-w-full md:max-w-5xl">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Details</h2>
      <div className="flex flex-wrap md:flex-nowrap gap-6">
        <DetailItem
          label="Drone count (Cam 1):"
          value={droneCounts.DronesDetectedCam1}
          icon={GiDeliveryDrone}
        />
        <DetailItem
          label="Drone count (Cam 2):"
          value={droneCounts.DronesDetectedCam2}
          icon={GiDeliveryDrone}
        />
        <DetailItem
          label="Message sent:"
          value="Yes"
          icon={FaCheck}
          color="text-green-500"
        />
        <DetailItem
          label="Buzzer:"
          value={
            droneCounts.DronesDetectedCam1 > 0 ||
            droneCounts.DronesDetectedCam2 > 0
              ? "ON"
              : "OFF"
          }
          icon={AiOutlineSound}
          color="text-red-500"
        />
        <DetailItem
          label="Camera:"
          value="Online"
          icon={BsCameraVideo}
          color="text-blue-500"
        />
      </div>
      <button
        className={`mt-4 px-4 py-2 rounded-lg text-white focus:outline-none ${
          isIntervalRunning
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
        onClick={toggleInterval}
      >
        {isIntervalRunning ? "Pause" : "Resume"}
      </button>
    </div>
  );
};

export default DetailsCard;
