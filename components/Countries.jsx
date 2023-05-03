"use client";
import SearchFilter from "./SearchFilter";
import { useState, useEffect, Suspense } from "react";
import Card from "./Card";
import Loading from "@/app/loading";

const Countries = ({ countries }) => {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("Filter by Region");

  return (
    <>
      <SearchFilter
        setSearch={setSearch}
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
      />
      <div className="mt-12 w-full flex justify-center">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-around xs:justify-between">
          <Suspense fallback={<Loading />}>
            <Card
              countries={countries}
              search={search}
              regionFilter={regionFilter}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Countries;
