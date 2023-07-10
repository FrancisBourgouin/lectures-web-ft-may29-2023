// const plant = {
//   id: "",
//   name: "",
//   type: "",
//   lastWatered: "date",
//   wateringInterval: 0,
// };

import { checkIfWellWatered } from "../helpers/plantHelpers";
import VeryCoolComponent from "./VeryCoolComponent";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval);

  const style = {
    border: "5px solid black",
    borderColor: isWellWatered ? "green" : "red",
  };

  return (
    <li style={style}>
      <VeryCoolComponent>
        <h1>
          {name} - {type}
        </h1>
      </VeryCoolComponent>
      <p>Last watered on: {lastWatered}</p>
      {/* border: red if not watered ok, green if ok */}
    </li>
  );
}
