// const Level4 = (props) => {
//   return (
//     <div className="level-4">
//       <h5>Level 4 >> {props.iCounter}</h5>
//       <div className="input-group">
//         <form onSubmit={(e)=>{
//           e.preventDefault();
//           let num = e.target.num.value;
//           props.onCounter(num);
//         }}>
//           <label htmlFor="number-input">Enter Number:</label>
//           <input type="number" id="number-input" name="num" />
//           <button type="submit">증가</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Level4;



import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions";

const Level4 = () => {
  const [inputValue, setInputValue] = useState(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      dispatch(increment(value));
    }
  };

  return (
    <div className="level-4">
      <h5>Level 4</h5>
      <p>Current Count: {count}</p>
      <div className="input-group">
        <label htmlFor="number-input">Enter Number:</label>
        <input
          type="number"
          id="number-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};

export default Level4;
