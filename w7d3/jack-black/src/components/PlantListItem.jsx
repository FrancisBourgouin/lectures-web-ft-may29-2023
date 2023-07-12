import { checkIfWellWatered } from "../helpers/plantHelpers";
import WaterButton from "./WaterButton";
// (Props: ...plant{}, waterPlant() | State: Null )
export default function PlantListItem(props) {
  const { name, lastWatered, wateringInterval, waterPlant } = props;

  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval);

  const plantStyle = {
    border: "0.5em solid black",
    borderColor: isWellWatered ? "green" : "red",
    padding: "2em",
    listStyleType: "none",
  };
  return (
    <li style={plantStyle}>
      <h1>{name}</h1>
      <p>last watered on : {lastWatered}</p>
      <WaterButton waterPlant={waterPlant} />
    </li>
  );
}
