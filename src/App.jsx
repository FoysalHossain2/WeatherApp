import { useState } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import WeatherProvider from "./Provider/WeatherProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WeatherProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </WeatherProvider>
    </>
  );
}

export default App;
