import React, { useState, useEffect } from "react";
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

// רישום המודולים ש-Chart.js משתמש בהם
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DroneDashboard = () => {
  // מצב (state) לאחסון נתוני ה-SQL מהשרת
  const [sqlData, setSqlData] = useState([]);

  // useEffect לביצוע פעולת הבאת הנתונים מ-SQL כאשר הקומפוננטה נטענת
  useEffect(() => {
    const fetchData = async () => {
      try {
        // הבאת הנתונים מ-SQL מה-API המקומי
        const sqlResponse = await fetch("http://localhost:5000/sql_data");
        const sqlResult = await sqlResponse.json();
        // עדכון המצב עם הנתונים שהתקבלו מהשרת בסדר הפוך (כך שהדגימה הכי חדשה תופיע קודם)
        setSqlData(sqlResult.reverse());
      } catch (error) {
        // במקרה של שגיאה, הדפסת השגיאה בקונסול
        console.error("Error fetching data:", error);
      }
    };

    // קריאה לפונקציית הבאת הנתונים
    fetchData();
    // יצירת אינטרוול לעדכון הנתונים כל 10 שניות
    const interval = setInterval(fetchData, 10000);
    // ביטול האינטרוול כאשר הקומפוננטה יוצאת מהזיכרון
    return () => clearInterval(interval);
  }, []); // המערך הריק אומר ש-useEffect יופעל רק כאשר הקומפוננטה נטענת בפעם הראשונה

  // נתוני הגרף: יצירת labels לפי תאריך ושעה של כל דגימה
  const sqlChartData = {
    labels: sqlData.map((item) => new Date(item.DateTime).toLocaleTimeString()), // תוויות לפי זמן
    datasets: [
      {
        label: "Drones Detected", // שם הגרף
        data: sqlData.map((item) => item.DronesDetected), // נתוני הזיהוי
        backgroundColor: "rgba(75, 192, 192, 0.2)", // צבע הרקע של העמודות
        borderColor: "rgba(75, 192, 192, 1)", // צבע הגבול של העמודות
        borderWidth: 1, // עובי הגבול של העמודות
      },
    ],
  };

  // אפשרויות לגרף
  const options = {
    responsive: true, // התאמת הגרף לכל גודל מסך
    maintainAspectRatio: false, // ביטול שמירת היחס האוטומטי בין הגובה לרוחב
    scales: {
      y: {
        beginAtZero: true, // התחלת הסקאלה האנכית מ-0
        ticks: {
          stepSize: 1, // קפיצה של 1 בין כל ציון על הסקאלה
        },
      },
    },
  };

  return (
    <div className="flex flex-wrap gap-6 p-6">
      <div className="flex-1 min-w-[250px] max-w-full">
        <h2 className="text-xl font-bold mb-4">
          Historical Drone Detection (Last 5 Samples)
        </h2>
        {/* תיבת הגרף עם כותרת וגרף ה-Bar */}
        <div className="relative h-64 md:h-80">
          <Bar data={sqlChartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DroneDashboard;
