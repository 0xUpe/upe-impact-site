"use client";
import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isVisible ? "block" : "hidden"}`}>
      <button
        onClick={scrollToTop}
        className="bg-upe-pink p-2 rounded-full shadow-md hover:bg-upe-silver transition-colors opacity-75"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default BackToTopButton;
