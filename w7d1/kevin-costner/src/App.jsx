import logo from "./logo.svg";
import "./App.css";
import PlantList from "./components/PlantList";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { plantsArr } from "./mocks/plantMocks";

function App() {
  const amountOfPlants = plantsArr.length;

  return (
    <div className="App">
      <Header count={amountOfPlants} theme="dark" />
      {/* {Header({ count: 4 })} */}
      <PlantList plants={plantsArr} />
      <Footer />
    </div>
  );
}

export default App;

{
  /* <h1 style="" class="" id="" >Hello!</h1> */
}
