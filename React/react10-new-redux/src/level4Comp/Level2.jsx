import Level3 from "./Level3";

const Level2 = (props) => {
  return (
    <div className="level-2">
      <h3>Level 2 : {props.iCounter}</h3>
      <Level3 iCounter={props.iCounter} onCounter={props.onCounter} />
    </div>
  );
};

export default Level2;