import { WeatherContext } from "../Context";
import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { WeatherData, Error, Loading } = useWeather();

  return (
    <WeatherContext.Provider value={{ WeatherData, Error, Loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
