import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../Context";

const useWeather = () => {
    const [WeatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: ""
    })

    const [Loading, setLoading] = useState({
        state: false,
        message: ""
    });

    const [Error, setError] = useState(null);

    const {SelectedLocation} = useContext(LocationContext);
    console.log(SelectedLocation);
    

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...Loading,
                state: true,
                message: 'Fetching weather data...'
            })
            
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
            if (!response.ok) {
                const errorMessage = `Fetching Weather data
                failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            const updateWeatherData = {
                ...WeatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.cloud?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            }
            setWeatherData(updateWeatherData)
        } catch (err) {
            setError(err)
            
        } finally {
            setLoading({
                ...Loading,
                state: false,
                message: ""
            })
        }
    }

    useEffect(() => {

        setLoading({
            ...Loading,
            state: true,
            message: "Finding location..."
        });

        if (SelectedLocation.latitude && SelectedLocation.longitude) {
            fetchWeatherData(SelectedLocation.latitude, SelectedLocation.longitude);
        } else {

            navigator.geolocation.getCurrentPosition(function(position) {
                fetchWeatherData(
                    position.coords.latitude, 
                    position.coords.longitude
                )
            });
        };
    
    }, [SelectedLocation.latitude, SelectedLocation.longitude]);

    return {
      WeatherData,
      Error,
      Loading
    }
    

}

export default useWeather;