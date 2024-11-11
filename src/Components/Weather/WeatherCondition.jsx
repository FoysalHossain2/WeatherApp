import React from "react";
import cloud from "../../assets/assets/icons/cloud.svg";
import humidity from "../../assets/assets/icons/humidity.svg";
import temp_max from "../../assets/assets/icons/temp_max.svg";
import temp_min from "../../assets/assets/icons/temp_min.svg";
import wind from "../../assets/assets/icons/wind.svg";

const WeatherCondition = () => {
  return (
    <>
      <div>
        <p className="text-sm lg:text-lg font-bold uppercase mb-8">
          thunderstorm with light drizzle
        </p>
        <ul className="space-y-6 lg:space-y-6">
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp max</span>
            <div className="inline-flex space-x-4">
              <p>19°</p>
              <img src={temp_max} alt="temp_max" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp min</span>
            <div className="inline-flex space-x-4">
              <p>19°</p>
              <img src={temp_min} alt="temp_min" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Humadity</span>
            <div className="inline-flex space-x-4">
              <p>58%</p>
              <img src={humidity} alt="humidity" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Cloudy</span>
            <div className="inline-flex space-x-4">
              <p>86%</p>
              <img src={cloud} alt="cloudy" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Wind</span>
            <div className="inline-flex space-x-4">
              <p>5km/h</p>
              <img src={wind} alt="wind" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WeatherCondition;