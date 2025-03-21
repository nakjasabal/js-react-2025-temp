import useCounterStore from "./useCounterStore";

function ZudApp() {
  // Zustand 상태 및 액션 가져오기
  const { count, increment, decrement, reset } = useCounterStore();

  return (<>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>카운터: {count}</h2>
      <button onClick={increment}>+1(증가)</button>
      <button onClick={decrement}>-1(감소)</button>
      <button onClick={reset}>초기화</button>
    </div>
  </>)
}

export default ZudApp
