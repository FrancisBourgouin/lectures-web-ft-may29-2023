import * as speechCommands from "@tensorflow-models/speech-commands";

export const returnBiggestIndex = (sampleData) => {
  const biggestValue = Math.max(...sampleData);
  const biggestValueIndex = sampleData.indexOf(biggestValue);

  return biggestValueIndex;
};

export const createModel = async () => {
  const URL = "http://localhost:3000/model/";
  const checkpointURL = URL + "model.json"; // model topology
  const metadataURL = URL + "metadata.json"; // model metadata

  const recognizer = speechCommands.create(
    "BROWSER_FFT", // fourier transform type, not useful to change
    undefined, // speech commands vocabulary feature, not useful for your models
    checkpointURL,
    metadataURL
  );

  // return recognizer.ensureModelLoaded().then(recognizer => recognizer)
  // check that model and metadata are loaded via HTTPS requests.
  try {
    await recognizer.ensureModelLoaded();
    return recognizer;
  } catch (err) {
    console.log(err);
  }
};

export const runModel = async (listenerCallback, recognizerOptions) => {
  const recognizer = await createModel();

  recognizer.listen(listenerCallback, recognizerOptions);
};