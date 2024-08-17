// src/pages/Live.js

import React from "react";
import logo from "./logo.png";

const Live = () => {
  return (
    <div className="bg-white p-6 rounded-lg  max-w-6xl mx-auto">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Company Logo" className="h-32 w-auto" />
      </div>

      {/* Company Introduction */}
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Welcome to Our Live Page
      </h2>
      <p className="text-gray-700 mb-4">
        We are a tech company specializing in AI-powered drone detection
        systems. Our innovative solutions leverage cutting-edge technology to
        provide accurate and reliable drone monitoring. Our goal is to enhance
        security and provide advanced solutions for various applications.
      </p>

      {/* Contact Information */}
      <div className="mt-4  pt-4">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Contact Us</h3>
        <p className="text-gray-700">
          If you have any questions or need further information, feel free to
          reach out to us:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>
            Email:{" "}
            <a
              href="mailto:info@yourcompany.com"
              className="text-blue-500 hover:underline"
            >
              info@yourcompany.com
            </a>
          </li>
          <li>
            Phone: <span className="text-blue-500">+1 (123) 456-7890</span>
          </li>
          <li>Address: 123 Tech Lane, Innovation City, IC 12345</li>
        </ul>
      </div>
    </div>
  );
};

export default Live;
