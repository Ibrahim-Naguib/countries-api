export async function generateMetadata({ params: { countryname } }) {
  return {
    title: decodeURIComponent(countryname),
    description: `Some details about ${decodeURIComponent(countryname)}`,
  };
}
export default function CountryLayout({ children }) {
  return <>{children}</>;
}
