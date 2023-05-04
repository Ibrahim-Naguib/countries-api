"use client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const CountryDetails = ({ data, border }) => {
  return (
    <main className="px-24 py-14">
      <div className="bg-white dark:bg-darkModeItem inline-block shadow-2xl rounded-md text-sm">
        <Link className="block px-8 py-2" href="/">
          <FontAwesomeIcon icon={faArrowLeft} />{" "}
          <span className="ml-2">Back</span>
        </Link>
      </div>
      <div className="flex mt-5">
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
            <div>
              Border Countries:{" "}
              {border
                ? border.map((bord, index) => (
                    <div className="bg-white dark:bg-darkModeItem shadow-2xl py-2 px-6 rounded-lg mr-2 mb-2 inline-block">
                      <Link
                        href={`/countries/${encodeURIComponent(bord)}`}
                        key={index}
                      >
                        {bord}
                      </Link>
                    </div>
                  ))
                : "No Border Countries"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
