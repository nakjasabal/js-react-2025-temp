import { useDispatch } from "react-redux";
import { actionObj } from "../reduxFiles/actions";

const Level4 = () => {
  const iDispatch = useDispatch();
  return (
    <div className="level-4">
      <h5>Level 4</h5>
      <div className="input-group">
        <form onSubmit={(e)=>{
          e.preventDefault();
          let changeNum = e.target.changeNum.value;
          let operFlag = e.target.operFlag.value;          
          iDispatch(actionObj(operFlag, changeNum));
        }}>          
          <select name="changeNum">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <select name="operFlag">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
          <button type="submit">카운트변경</button>
        </form>
      </div>
    </div>
  );
};

export default Level4;
