"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";

import Countries from "@/components/Countries";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/countries");
      const data = await res.json();
      setCountries(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <main className="px-5 xs:px-8 lg:px-12 my-6">
      <Countries countries={countries} />
    </main>
  );
}
