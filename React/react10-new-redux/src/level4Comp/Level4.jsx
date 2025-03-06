const Level4 = (props) => {
  return (
    <div className="level-4">
      <h5>Level 4 : {props.iCounter}</h5>
      <div className="input-group">
        <form onSubmit={(e)=>{
          e.preventDefault();
          let changeNum = e.target.changeNum.value;
          let operFlag = e.target.operFlag.value;
          props.onCounter(operFlag, changeNum);
        }}>
          <select name="changeNum">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <select name="operFlag">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
          <button type="submit">확인</button>
        </form>
      </div>
    </div>
  );
};

export default Level4;
