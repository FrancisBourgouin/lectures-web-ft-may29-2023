// (Props: plantCount0, waterAllPlants() | State: Null )

export default function Header(props) {
  const { plantCount, waterAllPlants } = props;
  return (
    <header>
      <h1>Plant Watering V - Revenge of the dry</h1>
      <h2>Saving {plantCount} plants from dehydration</h2>
      <button onClick={waterAllPlants}>WATER EVERYTHING</button>
    </header>
  );
}
