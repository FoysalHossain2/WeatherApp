import React, { useContext } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import { WeatherContext } from "./Context";

const Page = () => {
  const { Loading } = useContext(WeatherContext);

  return (
    <>
      {Loading.state ? (
        <div>
          <p>{Loading.message}</p>
        </div>
      ) : (
        <div className="grid place-items-center h-screen">
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
