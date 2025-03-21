import Level2 from "./Level2";
import { useSelector } from "react-redux";

const Level1 = () => {
  const iCounter = useSelector((s) =>{ 
    return s.iCounter;
  });
  return (
    <div className="level-1">
      <h2>Level 1 : {iCounter} </h2>
      <Level2 />
    </div>
  );
};

export default Level1;