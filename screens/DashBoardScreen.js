import React, { useState } from "react";
import CityList from "../components/CityList";
import CityItem from "../components/CityItem";

const DashBoardScreen = (props) => {
  const [cityItem] = useState({ title: "수원시", percent: 60 });
  return (
    <>
      <CityList />
      <CityItem cityName={cityItem.title} percent={cityItem.percent} />
    </>
  );
};

export default DashBoardScreen;
