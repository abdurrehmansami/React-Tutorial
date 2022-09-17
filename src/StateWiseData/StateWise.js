import React, { useEffect } from "react";

const StateWise = () => {
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log("hi");
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return <>Welcome</>;
};

export default StateWise;
