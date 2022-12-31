import "../styles.css";

export default function CardItem(props) {
  return (
    <>
      <div
        className="cardItem"
        style={{ backgroundColor: props.value }}
        onClick={props.onClick}
      >
        <p>{props.color} </p>
        <p>{props.value}</p>
      </div>
    </>
  );
}
