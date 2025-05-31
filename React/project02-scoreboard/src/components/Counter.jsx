export default function Counter(props) {
  return (<>
    <div className="counter">
      <button className="counter-action decrement"
        onClick={(e) => {
          props.onChangeScore('-', props.idx);
        }}> -</button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"
        onClick={(e) => {
          props.onChangeScore('+', props.idx);
        }}> +</button>
    </div>
  </>);
}