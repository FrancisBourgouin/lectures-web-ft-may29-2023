export default function CurrentWeather(props) {
  const { currentCity, weatherData } = props;

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const conditions = weatherData.weather[0].description;

  return (
    <section>
      <h1>Weather for {currentCity}</h1>
      <h2>It is currently : {temperature}°C</h2>
      <p>{conditions}</p>
    </section>
  );
}
