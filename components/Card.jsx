"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ countries, search, regionFilter }) => {
  const [visibleCountries, setVisibleCountries] = useState(8);

  const sentinel = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCountries((prevValue) => prevValue + 8);
          }
        });
      },
      { threshold: 1 }
    );

    if (sentinel.current) {
      observer.observe(sentinel.current);
    }

    return () => {
      if (sentinel.current) {
        observer.unobserve(sentinel.current);
      }
    };
  }, []);

  const filteredCountries = countries.filter(
    (item) =>
      (search.toLowerCase() === "" ||
        item.name.toLowerCase().includes(search)) &&
      (regionFilter === "Filter by Region" ||
        regionFilter === "All Countries" ||
        item.region === regionFilter)
  );
  return (
    <>
      {filteredCountries.slice(0, visibleCountries).map((country, index) => (
        <Link
          key={index}
          href={`/countries/${country.name}`}
          className="bg-white mb-6 shadow-lg cursor-pointer dark:bg-darkModeItem rounded-md pb-4 hover:scale-105 transition-scale duration-500"
        >
          <div className="w-full h-44">
            <Image
              loading="eager"
              src={country.flags.png}
              width={500}
              height={200}
              alt={country.name}
              className="h-full rounded-t-md"
            />
          </div>
          <div className="p-6">
            <h2 className="text-lg font-bold mb-4">{country.name}</h2>
            <p className="text-sm mb-2 font-[600]">
              Population:{" "}
              <span className="text-lightModeText dark:text-lightModeInput font-[300]">
                {" "}
                {country.population}
              </span>
            </p>
            <p className="text-sm mb-2 font-[600]">
              Region:{" "}
              <span className="text-lightModeText dark:text-lightModeInput font-[300]">
                {country.region}{" "}
              </span>
            </p>
            <p className="text-sm mb-2 font-[600]">
              Capital:{" "}
              <span className="text-lightModeText dark:text-lightModeInput font-[300]">
                {country.capital}{" "}
              </span>
            </p>
          </div>
        </Link>
      ))}
      <div ref={sentinel}></div>
    </>
  );
};

export default Card;
