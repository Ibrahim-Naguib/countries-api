import { getData } from "@/utils/getData";
import React from "react";

const Name = ({ params }) => {
  const data = getData();
  console.log(data);
  return <div>{params.countryname}</div>;
};

export default Name;
