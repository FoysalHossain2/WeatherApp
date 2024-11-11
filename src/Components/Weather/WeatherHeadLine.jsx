import React, { useContext } from "react";
import cloudIcon from "../../assets/assets/cloud.svg";
import pinIcon from "../../assets/assets/pin.svg";
import { WeatherContext } from "../../Context";
import { getFormattedDate } from "../../utlis/utilsDate";

const WeatherHeadLine = () => {
  const { WeatherData } = useContext(WeatherContext);

  const { climate, location, temperature, time } = WeatherData;

  return (
    <>
      {" "}
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={cloudIcon} alt="cloud" />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {Math.round(temperature)}°C
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={pinIcon} alt="pin" />
              <h2 className="text-2xl lg:text-[50px]">{location}</h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {getFormattedDate(time, "time", false)} -{" "}
          {getFormattedDate(time, "date", false)}
        </p>
      </div>
    </>
  );
};

export default WeatherHeadLine;
