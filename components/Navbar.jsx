"use client";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <header>
      <nav>
        <div>
          <h1 className="text-black dark:text-white">Where in the world?</h1>
        </div>
        <div
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            console.log(theme);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faMoon} />
          </span>
          <span>Dark Mode</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
