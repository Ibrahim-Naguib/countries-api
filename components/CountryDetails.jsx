"use client";
import Loading from "@/components/Loading";
import { getData } from "@/utils/getData";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const CountryDetails = ({ params }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [border, setBorder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getData();
      const decoded = decodeURIComponent(params.countryname);
      const country = data.find((countr) => countr.name === decoded);
      setData(country);
      setLoading(false);
      console.log(data);
      const borderCodes = country.borders;
      const borderNames = getCountryNamesByCodes(borderCodes, data);
      setBorder(borderNames);
    };
    fetchData();
  }, [params.countryname]);
  console.log(data);

  function getCountryNamesByCodes(codes, data) {
    if (codes)
      return codes.map((code) => {
        const country = data.find((c) => c.alpha3Code === code);
        return country.name;
      });
  }
  if (isLoading) return <Loading />;
  if (!data) return <Loading />;

  return (
    <main className="px-24 py-14">
      <div className="bg-white dark:bg-darkModeItem inline-block  rounded-md text-sm">
        <Link className="block px-8 py-2" href="/">
          <FontAwesomeIcon icon={faArrowLeft} />{" "}
          <span className="ml-2">Back</span>
        </Link>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Image
            src={data.flags.png}
            alt={data.name}
            width={350}
            height={350}
          />
        </div>
        <div className="flex-1">
          <h2>{data.name}</h2>
          <div>
            <div>
              <p>Native Name: {data.nativeName}</p>
              <p>Population: {data.population}</p>
              <p>Region: {data.region}</p>
              <p>Sub Region: {data.subregion}</p>
              <p>Capital: {data.capital}</p>
            </div>
            <div>
              <p>Top Level Domain: {data.topLevelDomain}</p>
              <p>
                Currencies:{" "}
                {data.currencies.map((curr, index) => (
                  <span key={index}>{curr.name}</span>
                ))}
              </p>
              <p>
                Languages:{" "}
                {data.languages.map((lang, index) => (
                  <span key={index}>{lang.name}</span>
                ))}
              </p>
            </div>
          </div>
          <div>
            <p>Border Countries:</p>
            {border
              ? border.map((bord, index) => (
                  <Link
                    href={`/countries/${encodeURIComponent(bord)}`}
                    key={index}
                  >
                    {bord}
                  </Link>
                ))
              : "No Border Countries"}
            {}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
