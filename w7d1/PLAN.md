# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

## Data

## Plant

```jsx
const plant = {
  id: "",
  name: "",
  type: "",
  lastWatered: "date",
  wateringInterval: 0,
};
```

## Plants

Object => Key/value is important, easy to look up (key), easier to access a specific one
Array => Order is important,

List with Object => for..in, Object.values().map()
List with Array => .map()

```jsx
const plants = [plant, plant]; 1 => xxx

const plants = { id: plant, id: plant }; 2 => xxxxxxx
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-07-5",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2023-02-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2023-03-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2021-01-20",
  wateringInterval: 1000,
};

const plantsArr = [plant1, plant2, plant3, plant4];
const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };

// How to calculate if a plant is well watered or not
// date in last watered minus the interval compared to today
```

## Structure

### HTML

- body
  - header
    - h1 Super watering world
  - main
    - h1 List of all plants
    - ul
      - li
        - h1 Name of plant / Type
        - p lastWatered
        - border: red if not watered ok, green if ok
      - li
        - h1 Name of plant / Type
        - p lastWatered
        - border: red if not watered ok, green if ok
  - footer
    - h1 Why not.

### Components

### Component Data
