"use client";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="bg-white dark:bg-darkModeItem px-5 xs:px-8 lg:px-12">
      <nav className="flex justify-between items-center">
        <div className="text-sm xs:text-lg lg:text-2xl font-[800]">
          <h1 className="text-black dark:text-white">Where in the world?</h1>
        </div>
        <div
          className="py-8 cursor-pointer text-xs xs:text-sm font-[600]"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <span className="mr-2 xs-mr-3">
            {theme === "light" ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </span>
          <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
