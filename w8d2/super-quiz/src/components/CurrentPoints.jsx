export default function CurrentPoints(props) {
  const { points } = props;
  return (
    <>
      {points === 0 && <p>No points yet!</p>}
      {points > 0 && <p>Current points are : {points}</p>}
    </>
  );
}
