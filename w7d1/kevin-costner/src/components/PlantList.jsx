// const plants = [plant, plant];
// const plant = {
//   id: "",
//   name: "",
//   type: "",
//   lastWatered: "date",
//   wateringInterval: 0,
// };

import { plant1 } from "../mocks/plantMocks";
import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;

  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);
  return (
    <main>
      <h1>List of all plants</h1>
      <ul>
        {parsedPlants}
        {/* {PlantListItem()} */}
        {/* <PlantListItem
          name={plant1.name}
          type={plant1.type}
          id={plant1.id}
          lastWatered={plant1.lastWatered}
          wateringInterval={plant1.wateringInterval}
        />
        <PlantListItem {...plant1} /> */}
        {/* props object will take all the args */}
      </ul>
    </main>
  );
}

// const authenticateUser = () => {
//   if ("valid") {
//     return { err: undefined, user: user };
//   }
//   return { err: "user is invalid", user: undefined };
// };
