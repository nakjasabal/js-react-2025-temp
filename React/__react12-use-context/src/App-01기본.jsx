import './App.css';

//컴포넌트 임포트 
import CompState1 from './commons/CompProps1';
import CompContext1a from './commons/CompContext1a';
import CompContext1b from './commons/CompContext1b';
//컨텍스트 임포트 
import { SimpleContext } from './context/SimpleContext';
//useState 임포트 
import { useState } from 'react';

function App() {
  //State 생성. 초기값은 1 
  const [myNumber, setMyNumber] = useState(1);

  return (<>
    <h2>최상위 컴포넌트</h2>
    {/* State로 선언한 myNumber의 값을 변경하기 위한 입력상자 */}
    <input type="number" value={myNumber} onChange={(e) => {
      setMyNumber(e.target.value);
    }} />

    <div className="App">
      <h3>Props를 통한 데이터 전달</h3>
      {/* 문자열과 숫자(State)를 Props로 전달 */}
      <CompState1 propData={'Props로 전달되는 데이터'} myNumber={myNumber} />
    </div>  

    {/* 하위 컴포넌트로 전달하는 Props없이 삽입 */}
    <div className="App">
      <h3>useContext 적용</h3>
      <CompContext1a />
    </div>  

    {/* 컨텍스트 프로바이더를 이용해서 하위 컴포넌트를 랩핑(감싸기)한다. 
    그러면 하위 컴포넌트는 프로바이더가 제공하는 데이터를 공유할 수 있다. */}
    <SimpleContext.Provider value={{str:'Provider의 초기값', num:myNumber}}>
    <div className="App">
      <h3>useContext 적용 및 Provider 래핑</h3>
      <CompContext1b />
    </div>  
    </SimpleContext.Provider>
  </>); 
}

export default App;

