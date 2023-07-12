import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import { plant1, plantsObj } from "./data/plantData";

function App() {
  const [plantData, setPlantData] = useState(plantsObj);

  const plantCount = Object.values(plantData).length;

  const waterPlant = (plantId) => {
    const updatedPlantData = { ...plantData };
    const updatedPlant = { ...plantData[plantId] };
    const today = new Date();

    updatedPlant.lastWatered = today.toLocaleString();
    updatedPlantData[plantId] = updatedPlant;

    setPlantData(updatedPlantData);
  };

  const waterAllPlants = () => {
    const today = new Date();
    const updatedPlantData = { ...plantData };

    for (const plantId in plantData) {
      const updatedPlant = { ...plantData[plantId] };

      updatedPlant.lastWatered = today.toLocaleString();
      updatedPlantData[plantId] = updatedPlant;
    }

    setPlantData(updatedPlantData);
  };

  return (
    <>
      <Header plantCount={plantCount} waterAllPlants={waterAllPlants} />
      <PlantList plantData={plantData} waterPlant={waterPlant} />
    </>
  );

  // return <WaterButton waterPlant={waterPlant} />;
  // return <PlantListItem {...plant1} waterPlant={waterPlant} />;
  // return <PlantList plantData={plantsObj} waterPlant={waterPlant} />;
  // return <Header plantCount={plantCount} waterAllPlants={waterAllPlants} />;
}

export default App;
