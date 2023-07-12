import { useState } from "react";

// WaterButton (Props: waterPlant() | State: isRefreshing)
export default function WaterButton(props) {
  const { waterPlant } = props;
  const [isRefreshing, setIsRefreshing] = useState(false);

  const niceWateringAction = () => {
    waterPlant();
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 5000);
  };
  return (
    <button disabled={isRefreshing} onClick={niceWateringAction}>
      WATER THE PLANT!
    </button>
  );
}
