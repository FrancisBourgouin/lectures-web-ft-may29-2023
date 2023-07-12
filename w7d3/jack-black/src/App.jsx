import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import { plantReducer, WATER_PLANT, WATER_ALL_PLANTS } from "./reducers/plantReducer";
import { plantsObj } from "./data/plantData";

function App() {
  const [state, dispatch] = useReducer(plantReducer, plantsObj);

  const plantCount = Object.keys(state).length;

  const waterAllPlants = () => dispatch({ type: WATER_ALL_PLANTS });
  const waterPlant = (plantId) => dispatch({ type: WATER_PLANT, payload: { plantId } });
  return (
    <>
      <Header plantCount={plantCount} waterAllPlants={waterAllPlants} />
      <PlantList plantData={state} waterPlant={waterPlant} />
    </>
  );

  // return <WaterButton waterPlant={waterPlant} />;
  // return <PlantListItem {...plant1} waterPlant={waterPlant} />;
  // return <PlantList plantData={plantsObj} waterPlant={waterPlant} />;
  // return <Header plantCount={plantCount} waterAllPlants={waterAllPlants} />;
}

export default App;
