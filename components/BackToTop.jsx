"use client";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-10 right-5 cursor-pointer w-12 h-12 bg-gray-900 bg-opacity-75 rounded-full flex items-center justify-center text-white transition-opacity ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};

export default BackToTop;
