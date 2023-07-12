// Possible actions

export const WATER_PLANT = "WATER_PLANT"; // we need an id
export const WATER_ALL_PLANTS = "WATER_ALL_PLANTS"; // we need nothing
export const ADD_A_PLANT = "ADD_A_PLANT"; // we need nothing

// action.type => type of action
// action.payload => relevant info with action

export const plantReducer = (state, action) => {
  const today = new Date();
  const updatedPlantData = { ...state };
  switch (action.type) {
    case WATER_PLANT:
      const plantId = action.payload.plantId;
      const updatedPlant = { ...state[plantId] };

      updatedPlant.lastWatered = today.toLocaleString();
      updatedPlantData[plantId] = updatedPlant;

      return updatedPlantData;
    case WATER_ALL_PLANTS:
      for (const plantId in state) {
        const updatedPlant = { ...state[plantId] };

        updatedPlant.lastWatered = today.toLocaleString();
        updatedPlantData[plantId] = updatedPlant;
      }

      return updatedPlantData;
    case ADD_A_PLANT:
      break;
  }
};

const exampleAction1 = { type: WATER_PLANT, payload: { plantId: 5 } };
const exampleAction2 = { type: WATER_ALL_PLANTS };
