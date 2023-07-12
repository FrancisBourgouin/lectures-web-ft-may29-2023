import PlantListItem from "./PlantListItem";
// (Props: plantData{}, waterPlant() | State: Null)
export default function PlantList(props) {
  const { plantData, waterPlant } = props;

  const plantList = typeof plantData === "object" ? Object.values(plantData) : [];

  const parsedPlants = plantList.map((plant) => (
    <PlantListItem key={plant.id} {...plant} waterPlant={() => waterPlant(plant.id)} />
  ));

  return (
    <main>
      <h1>All the plants</h1>
      {parsedPlants.length === 0 && <h1>WHERE ARE THE PLANTS!</h1>}
      <ul>{parsedPlants.length > 0 && parsedPlants}</ul>
    </main>
  );
}
