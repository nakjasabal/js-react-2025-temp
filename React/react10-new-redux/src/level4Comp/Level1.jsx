import Level2 from "./Level2";

const Level1 = (props) => {
  return (
    <div className="level-1">
      <h2>Level 1 : {props.iCounter}</h2>
      <Level2 iCounter={props.iCounter} onCounter={props.onCounter} />
    </div>
  );
};

export default Level1;
