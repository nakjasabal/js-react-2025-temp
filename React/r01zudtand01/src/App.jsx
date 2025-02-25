import { useState } from "react";
import useMultiStore from "./useMultiStore";


function App() {
  // Zustand 상태 및 액션 가져오기
  const { count, name, increase, setName } = useMultiStore();
  const [newName, setNewName] = useState("");

  return (<>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>카운트: {count}</h2>
      <button onClick={increase}>+1증가</button>

      <h2>이름: {name}</h2>
      <input type="text" value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={() => setName(newName)}>이름변경</button>
    </div>   
  </>)
}

export default App
