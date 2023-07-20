export default function CityHistory(props) {
  const { cityList, updateWeatherAndCity } = props;

  const parsedButtons = cityList.map((city) => (
    <li>
      <button onClick={() => updateWeatherAndCity({ city })}>{city}</button>
    </li>
  ));
  return (
    <section>
      <ul>{parsedButtons}</ul>
    </section>
  );
}
