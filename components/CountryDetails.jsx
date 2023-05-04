"use client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

const CountryDetails = ({ data, border }) => {
  return (
    <main className="px-6 xs:px-12 lg:px-24 py-14 flex justify-center flex-col">
      <div className="bg-white dark:bg-darkModeItem inline-block w-fit shadow-2xl rounded-md text-sm">
        <Link className="block px-8 py-2" href="/">
          <FontAwesomeIcon icon={faArrowLeft} />{" "}
          <span className="ml-2">Back</span>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row mt-16 lg:mt-5 gap-20">
        <div className="flex-1 relative min-h-[300px] xs:max-h-[400px]">
          <Image
            src={data.flags.png}
            alt={data.name}
            // width={1000}
            // height={1000}
            fill
          />
        </div>
        <div className="flex-1 pt-6 lg:pt-10">
          <h2 className="font-[800] text-3xl">{data.name}</h2>
          <div className="mt-6 flex flex-col xs:flex-row justify-between gap-14 text-sm xs:text-base">
            <div className="country-details">
              <p>
                Native Name:{" "}
                <span className="text-lightModeText dark:text-lightModeInput">
                  {data.nativeName}
                </span>
              </p>
              <p>
                Population:{" "}
                <span className="text-lightModeText dark:text-lightModeInput">
                  {data.population}
                </span>
              </p>
              <p>
                Region:{" "}
                <span className="text-lightModeText dark:text-lightModeInput">
                  {data.region}
                </span>
              </p>
              <p>
                Sub Region:{" "}
                <span className="text-lightModeText dark:text-lightModeInput">
                  {data.subregion}
                </span>
              </p>
              <p>
                Capital:{" "}
                <span className="text-lightModeText dark:text-lightModeInput">
                  {data.capital}
                </span>
              </p>
            </div>
            <div className="country-details">
              <p>
                Top Level Domain:{" "}
                <span className="text-lightModeText dark:text-lightModeInput">
                  {data.topLevelDomain}
                </span>
              </p>
              <p>
                Currencies:{" "}
                {data.currencies.map((curr, index) => (
                  <span
                    className="text-lightModeText dark:text-lightModeInput"
                    key={index}
                  >
                    {curr.name}
                  </span>
                ))}
              </p>
              <p>
                Languages:{" "}
                {data.languages.map((lang, index) => (
                  <span
                    className="text-lightModeText dark:text-lightModeInput"
                    key={index}
                  >
                    {lang.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div>
            <div className="font-[600] mt-14 text-sm xs:text-base">
              Border Countries:{" "}
              {border
                ? border.map((bord, index) => (
                    <div className="bg-white dark:bg-darkModeItem shadow-2xl rounded-lg mr-2 mb-2 inline-block font-[300] text-lightModeText dark:text-lightModeInput">
                      <Link
                        href={`/countries/${encodeURIComponent(bord)}`}
                        key={index}
                        className="block py-2 px-6"
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
