"use client";
import CountryDetails from "@/components/CountryDetails";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";

const page = ({ params: { countryname } }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [border, setBorder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("../../api/countries");
      const data = await res.json();
      const decoded = decodeURIComponent(countryname);
      const country = data.find((countr) => countr.name === decoded);
      setData(country);
      setLoading(false);
      const borderCodes = country.borders;
      const borderNames = getCountryNamesByCodes(borderCodes, data);
      setBorder(borderNames);
    };
    fetchData();
  }, []);

  function getCountryNamesByCodes(codes, data) {
    if (codes)
      return codes.map((code) => {
        const country = data.find((c) => c.alpha3Code === code);
        return country.name;
      });
  }

  if (loading || !data) {
    return <Loading />;
  }

  console.log(data);
  return (
    <main>
      <CountryDetails data={data} border={border} />
    </main>
  );
};

export default page;
