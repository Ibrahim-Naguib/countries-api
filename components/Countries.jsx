"use client";
import SearchFilter from "./SearchFilter";
import { getData } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Countries = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("Filter by Region");

  useEffect(() => {
    setLoading(true);
    getData().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Country data</p>;

  return (
    <main>
      <SearchFilter
        setSearch={setSearch}
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
      />
      <div className="mt-12 w-full shadow-lg ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-between">
          {data
            .filter(
              (item) =>
                (search.toLowerCase() === "" ||
                  item.name.toLowerCase().includes(search)) &&
                (regionFilter === "Filter by Region" ||
                  regionFilter === "All Countries" ||
                  item.region === regionFilter)
              // search.toLowerCase() === ""
              //   ? item
              //   : item.name.toLowerCase().includes(search) &&
              //     item.region === regionFilter
            )
            .map((country, index) => (
              <Link
                key={index}
                href={`/countries/${country.name}`}
                className="bg-white mb-6 cursor-pointer dark:bg-darkModeItem rounded-md pb-4"
              >
                <div className="w-full h-44">
                  <Image
                    priority
                    src={country.flags.png}
                    width={500}
                    height={200}
                    alt={country.name}
                    className="h-full rounded-t-md"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold mb-4">{country.name}</h2>
                  <p className="text-sm mb-2">
                    Population:{" "}
                    <span className="text-lightModeInput">
                      {" "}
                      {country.population}
                    </span>
                  </p>
                  <p className="text-sm mb-2">
                    Region:{" "}
                    <span className="text-lightModeInput">
                      {country.region}{" "}
                    </span>
                  </p>
                  <p className="text-sm mb-2">
                    Capital:{" "}
                    <span className="text-lightModeInput">
                      {country.capital}{" "}
                    </span>
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Countries;
