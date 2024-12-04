import React, { useContext } from "react";
import { default as CloudIcon } from "../../assets/assets/cloud.svg";
import HazeIcon from "../../assets/assets/haze.SVG";
import SnowIcon from "../../assets/assets/icons/snow.svg";
import SunnyIcon from "../../assets/assets/icons/sunny.svg";
import pinIcon from "../../assets/assets/pin.svg";
import RainIcon from "../../assets/assets/rainy.svg";
import ThunderIcon from "../../assets/assets/thunder.svg";
import { WeatherContext } from "../../Context";
import { getFormattedDate } from "../../utlis/utilsDate";

const WeatherHeadLine = () => {
  const { WeatherData } = useContext(WeatherContext);

  const { climate, location, temperature, time } = WeatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;

      default:
        return SunnyIcon;
    }
  }

  return (
    <>
      {" "}
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={getWeatherIcon(climate)} alt="climate" />
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
