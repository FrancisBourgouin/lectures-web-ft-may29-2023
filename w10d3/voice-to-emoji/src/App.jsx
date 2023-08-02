import "./App.css";
import { useState } from "react";

import { returnBiggestIndex, runModel } from "./mlHelpers";

function App() {
  const recognizerOptions = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
  };

  const listenerCallback = (result) => {
    // console.log(result);
    const scores = Array.from(result.scores);

    const index = returnBiggestIndex(scores);

    if (index !== 1) {
      console.log(index);
      setCurrentIndex(index);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(1);

  const coolEmojis = [
    "🐜👄🤷🤷‍♂️",
    "📕📘📙💨",
    "🍵☕🍵☕",
    "🧜🧜‍♂️🧜‍♀️🧜‍♂️",
    "🥔🥔🥔🥔",
    "✈️🌍🌎✈️",
  ];
  return (
    <div className="App">
      <header>
        <h1>Super Emoji Yeah!</h1>
      </header>
      <main>
        <section className="emojis">
          <p>{coolEmojis[currentIndex]}</p>
        </section>
        <section>
          <button onClick={() => runModel(listenerCallback, recognizerOptions)}>
            Start Listening!
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
