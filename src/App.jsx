import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import {
  FavoriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./Provider";

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavoriteProvider>
            <div className="grid place-items-center h-screen">
              <Header />
              <main>
                <section>
                  <WeatherBoard />
                </section>
              </main>
            </div>
          </FavoriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
