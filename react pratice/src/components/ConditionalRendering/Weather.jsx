import React from "react";
const ColdOutside = ({ temp }) => (
  <h1>It's cold outside and its temperature is {temp} degree </h1>
);
const NiceOutside = ({ temp }) => (
  <h1>It's nice outside and its temperature is {temp}degree</h1>
);
const HotOutside = ({ temp }) => (
  <h1>It's hot outside and its temperature is {temp}degree</h1>
);

const Weather = ({ temperature }) => {
  // if (temperature < 15) {
  //   return <ColdOutside />;
  // } else if (temperature >= 15 && temperature <= 25) {
  //   return <NiceOutside />;
  // } else {
  //   return <HotOutside />;
  // }
  console.log(temperature);
  return temperature < 15 ? (
    <ColdOutside temp={temperature} />
  ) : temperature < 25 ? (
    <NiceOutside temp={temperature} />
  ) : (
    <HotOutside temp={temperature} />
  );
};

export default Weather;
