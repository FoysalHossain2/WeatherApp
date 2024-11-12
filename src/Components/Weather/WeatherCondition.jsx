import React, { useContext } from "react";
import cloudIcon from "../../assets/assets/icons/cloud.svg";
import humidityIcon from "../../assets/assets/icons/humidity.svg";
import temp_max from "../../assets/assets/icons/temp_max.svg";
import temp_min from "../../assets/assets/icons/temp_min.svg";
import windIcon from "../../assets/assets/icons/wind.svg";
import { WeatherContext } from "../../Context";

const WeatherCondition = () => {
  const { WeatherData } = useContext(WeatherContext);

  const { maxTemperature, minTemperature, humidity, climate, wind } =
    WeatherData;

  return (
    <>
      <div>
        <p className="text-sm lg:text-lg font-bold uppercase mb-8">
          The climate is <u>{climate}</u>
        </p>
        <ul className="space-y-6 lg:space-y-6">
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp max</span>
            <div className="inline-flex space-x-4">
              <p>{Math.round(maxTemperature)}°</p>
              <img src={temp_max} alt="temp_max" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp min</span>
            <div className="inline-flex space-x-4">
              <p>{Math.round(minTemperature)}°</p>
              <img src={temp_min} alt="temp_min" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Humadity</span>
            <div className="inline-flex space-x-4">
              <p>{humidity}%</p>
              <img src={humidityIcon} alt="humidity" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Cloudy</span>
            <div className="inline-flex space-x-4">
              <p>{climate}%</p>
              <img src={cloudIcon} alt="cloudy" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Wind</span>
            <div className="inline-flex space-x-4">
              <p>{wind}m/h</p>
              <img src={windIcon} alt="wind" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WeatherCondition;
