"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";

const SearchFilter = ({ regionFilter, setRegionFilter, setSearch }) => {
  const regions = [
    "All Countries",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const menuRef = useRef(null);

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const clickHandler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [menuRef]);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="flex flex-col xs:flex-row gap-3 justify-between text-lightModeText dark:text-lightModeInput text-sm">
      <div className="flex items-center gap-3 w-auto xs:w-96 p-4 shadow-lg rounded-lg bg-white dark:bg-darkModeItem  ">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="search"
          placeholder="Search for a country"
          className="outline-none bg-inherit w-full placeholder:text-lightModeText dark:placeholder:text-lightModeInput"
          onChange={handleSearch}
        />
      </div>
      <div>
        <div
          onClick={() => setMenu(!menu)}
          ref={menuRef}
          className="relative shadow-lg cursor-pointer flex justify-between items-center p-4 rounded-lg w-[200px] bg-white dark:bg-darkModeItem"
        >
          {regionFilter}
          {menu ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
          <div
            className={`z-10 w-[200px] transition-all duration-500 shadow-sm rounded-lg bg-white dark:bg-darkModeItem mt-3 absolute right-0 top-12  ${
              menu
                ? "translate-y-0"
                : "translate-y-[-50px] opacity-0 pointer-events-none"
            }`}
          >
            <ul className="">
              {regions.map((region, index) => (
                <li
                  className="flex pl-5 py-3 rounded-lg transition-all duration-500 hover:bg-slate-100 dark:hover:bg-darkModeBg dark:hover:bg-opacity-50"
                  key={index}
                  onClick={(e) => {
                    setRegionFilter(region);
                  }}
                >
                  <button className="">{region}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
