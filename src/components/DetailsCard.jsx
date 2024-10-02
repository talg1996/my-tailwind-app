import React, { useState, useEffect } from "react";
import { GiDeliveryDrone } from "react-icons/gi";
import { AiOutlineSound } from "react-icons/ai";
import axios from "axios";

const DetailsCard = () => {
  const [droneCounts, setDroneCounts] = useState({
    DronesDetectedCam1: 0,
    DronesDetectedCam2: 0,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/live_data");
      setDroneCounts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // קריאה ל-fetchData בהתחלה
    fetchData();

    // קובע את ה-interval לקריאה כל 100 מילי-שניות
    const intervalId = setInterval(() => {
      fetchData();
    }, 100);

    // מנקה את ה-interval כש-component מתאפס
    return () => {
      clearInterval(intervalId);
    };
  }, []); // לא צריך לתלות את fetchData כי היא לא תשתנה

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
      </div>
    </div>
  );
};

export default DetailsCard;
