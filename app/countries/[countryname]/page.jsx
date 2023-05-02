import CountryDetails from "@/components/CountryDetails";
import Name from "@/components/Name";

const page = async ({ params }) => {
  return (
    <main>
      {/* <CountryDetails params={params} /> */}
      {/* {params.countryname} */}
      <Name params={params} />
    </main>
  );
};

export default page;
