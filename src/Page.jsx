import React, { useContext, useEffect, useState } from "react";

import ClearImg from "./assets/assets/backgrounds/clear-sky.jpg";
import FewCloudsImg from "./assets/assets/backgrounds/few-clouds.jpg";
// import MistImg from "./assets/assets/backgrounds/mist.jpg";
import RainyDayImg from "./assets/assets/backgrounds/rainy-day.jpg";
import ScatteredImg from "./assets/assets/backgrounds/scattered-clouds.jpg";
import SnowImg from "./assets/assets/backgrounds/snow.jpg";
import ThunderstormImg from "./assets/assets/backgrounds/thunderstorm.jpg";
import WinterImg from "./assets/assets/backgrounds/winter.jpg";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import { WeatherContext } from "./Context";

const Page = () => {
  const { WeatherData, Loading } = useContext(WeatherContext);

  const { climate } = WeatherData;

  const [ClimateImg, setsClimateImg] = useState("");

  function getBackgroundImage() {
    switch (climate) {
      case "Rain":
        return RainyDayImg;
      case "Clouds":
        return ScatteredImg;
      case "Clear":
        return ClearImg;
      case "Snow":
        return SnowImg;
      case "Thunder":
        return ThunderstormImg;
      case "Fog":
        return WinterImg;
      case "Haze":
        return FewCloudsImg;

      default:
        return ClearImg;
    }
  }

  useEffect(() => {
    const bgImg = getBackgroundImage(WeatherData.climate);
    setsClimateImg(bgImg);
  }, [WeatherData.climate]);

  return (
    <>
      {Loading.state ? (
        <div>
          <p>{Loading.message}</p>
        </div>
      ) : (
        <div
          className="grid place-items-center h-screen"
          style={{ backgroundImage: `url(${ClimateImg})` }}
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
