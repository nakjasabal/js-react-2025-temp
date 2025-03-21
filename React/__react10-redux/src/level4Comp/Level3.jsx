import Level4 from "./Level4";

const Level3 = (props) => {
  return (
    <div className="level-3">
      <h4>Level 3 >> {props.iCounter}</h4>
      <Level4 iCounter={props.iCounter} onCounter={props.onCounter} />
    </div>
  );
};

export default Level3;
