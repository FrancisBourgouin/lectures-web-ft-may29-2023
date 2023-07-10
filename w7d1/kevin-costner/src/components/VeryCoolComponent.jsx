export default function VeryCoolComponent(props) {
  const cool = "🥰🤦‍♀️😂👃🧜‍♂️🏖️🌻🤨🥔";
  return (
    <>
      <p>{cool}</p>
      {props.children}
      <p>{cool}</p>
    </>
  );
}
