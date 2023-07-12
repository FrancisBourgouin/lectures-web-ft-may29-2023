# Watering Plants V - Water Strikes Back

Show a list of plants with their name, watering interval, lastwatered. Have a possiblity of watering one plant, and watering all the plants.

## Data

### Plant

```jsx
const plant = {
  id: 1,
  name: "Fern",
  wateringInterval: 2,
  lastWateredDate: "Wed, 14 Jun 2017 07:00:00 GMT",
};
```

### PlantList

OoO => We need to transform the object before mapping, more work. Everything easy to access with key
AoO => Easily loop over all the objects! Costly to find one element, tied to order of elements

```jsx
const plants = {
  // 1 -
  1: plant,
  2: plant,
};

const plants = [plant, plant]; // 2 - xxxxx
```

```jsx
// Immutability

const bob = [1, 2, 3, 4];

console.log(bob.pop()); // 4
console.log(bob.pop()); // 3
console.log(bob.pop()); // 2
console.log(bob.pop()); // 1

const purePop = (arr) => {
  const newArr = [...arr];

  newArr.pop();

  return newArr;
};

const someObject = {
  sub: {
    name: "bob",
  },
};

const newObject = { ...someObject };
const newSub = { ...someObject.sub };

newObject.sub = newSub;
```

## Seed Data

```jsx
export const plant1 = {
  id: "1",
  name: "Monstera",
  lastWatered: "2023-05-20",
  wateringInterval: 7,
};
export const plant2 = {
  id: "2",
  name: "Tulips",
  lastWatered: "2023-02-10",
  wateringInterval: 4,
};
export const plant3 = {
  id: "3",
  name: "Cherry",
  lastWatered: "2023-03-20",
  wateringInterval: 60,
};
export const plant4 = {
  id: "4",
  name: "Money Tree",
  lastWatered: "2021-01-20",
  wateringInterval: 1000,
};

export const plantsArr = [plant1, plant2, plant3, plant4];
export const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

## Structure

### HTML

- body
  - header
    - h1 title
    - h2 saving X plants
    - button water all the plants
  - main
    - h1 All plants
    - ul
      - li
        - h1 name - type
        - button water the plant
        - border red/green

### Components

- App
  - Header
  - PlantList
    - PlantListItem
      - WaterButton

### Component Data

- App (Props: | State: plantData{})

  - Header (Props: plantCount0, waterAllPlants() | State: Null )
  - PlantList (Props: plantData{}, waterPlant() | State: Null)
    - PlantListItem (Props: ...plant{}, waterPlant() | State: Null )
      - WaterButton (Props: waterPlant() | State: Null)

- App
  - Map
    - MapList
    - MapEditor
      - EditMap
      - CreateMap
      -

### Helper functions!
