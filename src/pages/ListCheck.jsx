import React, { useState } from "react";
import {
  FaCamera,
  FaBell,
  FaShareAlt,
  FaLink,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
} from "react-icons/fa";

const ListCheck = () => {
  // State to manage the test results
  const [result, setResult] = useState("");
  const [statusIcon, setStatusIcon] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTestClick = (testName) => {
    // Show loading spinner
    setLoading(true);
    setResult("");
    setStatusIcon(null);

    // Simulate a delay before showing the result
    setTimeout(() => {
      // Simulate a test result with a random pass or fail status
      const isPass = Math.random() > 0.5; // Randomly determine pass/fail
      const resultMessage = `${testName} test ${
        isPass ? "completed successfully." : "failed."
      }`;

      setResult(resultMessage);
      setStatusIcon(
        isPass ? (
          <FaCheckCircle className="text-green-500 h-6 w-6" />
        ) : (
          <FaTimesCircle className="text-red-500 h-6 w-6" />
        )
      );
      setLoading(false); // Hide loading spinner
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <div className="flex flex-col items-center justify-center p-6  dark:bg-gray-800 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        System Test
      </h2>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
        Use the buttons below to initiate various system tests.
      </p>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <button
          onClick={() => handleTestClick("Test Cam 1")}
          className="flex items-center px-6 py-3 bg-blue-500 dark:bg-blue-700 text-white font-semibold rounded shadow-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
        >
          <FaCamera className="h-5 w-5 mr-2" />
          Test Cam 1
        </button>
        <button
          onClick={() => handleTestClick("Test Cam 2")}
          className="flex items-center px-6 py-3 bg-blue-500 dark:bg-blue-700 text-white font-semibold rounded shadow-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
        >
          <FaCamera className="h-5 w-5 mr-2" />
          Test Cam 2
        </button>
        <button
          onClick={() => handleTestClick("Test Buzzer")}
          className="flex items-center px-6 py-3 bg-blue-500 dark:bg-blue-700 text-white font-semibold rounded shadow-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
        >
          <FaBell className="h-5 w-5 mr-2" />
          Test Buzzer
        </button>
        <button
          onClick={() => handleTestClick("Test Communicate")}
          className="flex items-center px-6 py-3 bg-blue-500 dark:bg-blue-700 text-white font-semibold rounded shadow-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
        >
          <FaShareAlt className="h-5 w-5 mr-2" />
          Test Communicate
        </button>
        {/* Add more test buttons as needed */}
      </div>
      <div className="mt-6 p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded shadow-md w-full max-w-md flex items-center">
        {loading ? (
          <FaSpinner className="text-gray-500 dark:text-gray-400 h-6 w-6 mr-2 animate-spin" />
        ) : (
          statusIcon
        )}
        <div className="ml-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Test Result:
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default ListCheck;
