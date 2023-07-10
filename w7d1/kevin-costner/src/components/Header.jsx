import VeryCoolComponent from "./VeryCoolComponent";

export default function Header(props) {
  const { count, theme } = props;

  const style = {
    background: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };
  return (
    <header style={style}>
      <h1>Super Watering World</h1>
      <VeryCoolComponent>
        <h2>Helping {count} plants from dehydration</h2>
      </VeryCoolComponent>
    </header>
  );
}

// const helper1 = () => {}
// const helper2 = () => {}

// module.exports = {helper1, helper2}

// const {helper1, helper2} = require("./helpers")

// const helpers = require("./helpers")

// helpers.helper1
