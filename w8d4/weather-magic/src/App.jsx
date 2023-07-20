import { useEffect, useState } from "react";
import "./App.css";
import WeatherSearch from "./components/WeatherSearch";
import CityHistory from "./components/CityHistory";
import CurrentWeather from "./components/CurrentWeather";
import axios from "axios";

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityList, setCityList] = useState([]);
  const [weatherData, setWeatherData] = useState(undefined);

  // useEffect(() => { BAD BAD BAD
  //   if (weatherData) {
  //     setCityList([...cityList, currentCity]);
  //   }
  // }, [currentCity, weatherData]);

  // useEffect => componentDidMount / componentDidUpdate / componentWillUnmount (NOT TRUE)
  // useEffect => Handling side effects

  useEffect(() => {
    const log = (event) =>
      console.log("Client clicked at:", event.clientX, event.clientY);

    document.addEventListener("click", log);

    return () => document.removeEventListener("click", log);
  });

  const updateCity = (formData) => {
    // setCurrentCity(formData.city);
    setCityList([...cityList, formData.city]);
  };

  const fetchWeatherForCity = (cityName) => {
    const API_KEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    return axios
      .get(url)
      .then((res) => res.data)
      .then(setWeatherData);
  };

  const updateWeatherAndCity = (formData) => {
    setWeatherData(undefined);
    setCurrentCity(formData.city);
    fetchWeatherForCity(formData.city)
      .then(() => {
        if (!cityList.includes(formData.city)) {
          setCityList([...cityList, formData.city]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <header>
        <h1>Super Weather App 🌩️🌪️🌞</h1>
      </header>
      <main>
        <WeatherSearch onSubmit={updateWeatherAndCity} />
        <CityHistory cityList={cityList} updateWeatherAndCity={updateWeatherAndCity} />
        {weatherData && (
          <CurrentWeather currentCity={currentCity} weatherData={weatherData} />
        )}
      </main>
    </>
  );
}

export default App;

const arr = [1, 2, 3];
const logNumber = (number) => console.log("the number is: ", number);

arr.forEach(logNumber);
