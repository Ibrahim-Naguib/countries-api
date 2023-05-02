import Image from "next/image";
import Link from "next/link";

const Card = ({ data, search, regionFilter }) => {
  return (
    <>
      {data
        .filter(
          (item) =>
            (search.toLowerCase() === "" ||
              item.name.toLowerCase().includes(search)) &&
            (regionFilter === "Filter by Region" ||
              regionFilter === "All Countries" ||
              item.region === regionFilter)
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
                <span className="text-lightModeInput">{country.region} </span>
              </p>
              <p className="text-sm mb-2">
                Capital:{" "}
                <span className="text-lightModeInput">{country.capital} </span>
              </p>
            </div>
          </Link>
        ))}
    </>
  );
};

export default Card;
