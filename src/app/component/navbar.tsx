"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Importing React Icons

export default function Navbar() {
  // State to store the current date and time
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    // Function to update the current date and time
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // 24-hour format
      };

      // Format the current date and time
      setCurrentDateTime(
        `${now.toLocaleDateString("en-US", options)} ${now.toLocaleTimeString("en-US", {
          hour12: false,
        })}`
      );
    };

    // Update the date and time immediately on mount
    updateDateTime();

    // Set interval to update every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="text-white body-font shadow-md text-lg bg-gray-900 relative">
      <div className="container mx-auto flex flex-wrap items-center p-6">
        {/* Logo Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-auto">
          {/* Logo */}
          <div className="mb-4 sm:mb-0 flex justify-center sm:justify-start">
            <Image
              src="/images/logom.png"
              alt="logo"
              width={80} // Base size for mobile
              height={80}
              className="rounded-full object-contain w-20 h-20 sm:w-24 sm:h-24 shadow-lg" // Added shadow for better look
            />
          </div>

          {/* Current Date and Time */}
          <div className="text-white text-center sm:text-left sm:ml-6 mt-2 sm:mt-0">
            <span className="font-semibold text-xl">{currentDateTime}</span> {/* Increased font size */}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="md:ml-auto flex flex-wrap items-center justify-center space-x-6 mt-8 sm:mt-0">
          <Link
            href="/"
            className="flex items-center text-lg font-medium text-white hover:text-red-500 transition-all duration-300 transform hover:scale-105 py-2 px-4 rounded-md"
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            href="/about"
            className="flex items-center text-lg font-medium text-white hover:text-red-500 transition-all duration-300 transform hover:scale-105 py-2 px-4 rounded-md"
          >
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link
            href="/contact"
            className="flex items-center text-lg font-medium text-white hover:text-red-500 transition-all duration-300 transform hover:scale-105 py-2 px-4 rounded-md"
          >
            <FaEnvelope className="mr-2" /> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
