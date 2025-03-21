import { useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

import Props1st from '../contexts/Props1st';
import Context1st from '../contexts/Context1st';

const UseContextExam = () => {
  const [globalNum, setGlobalNum] = useState(1);
  return (<>
    <h1>useContext 사용하기</h1>
    <input type="number" value={globalNum} onChange={(e) => {
      setGlobalNum(e.target.value);
    }} /> 스핀박스Click

    <div className='ctxb'>
      <h2>Props를 통한 데이터 전달</h2>
      <Props1st propData={'유겸이'} propNumber={globalNum} />
    </div>  

    {/* 컨텍스트 프로바이더를 이용해서 하위 컴포넌트를 랩핑(감싸기)한다. 
    그러면 하위 컴포넌트는 프로바이더가 제공하는 데이터를 공유할 수 있다. */}
    <GlobalContext.Provider value={{str:'낙자쌤', num:globalNum}}>
    <div className='ctxb'>
      <h2>useContext 적용 및 Provider 래핑</h2>
      <Context1st />
    </div>  
    </GlobalContext.Provider>
  </>);
}

export default UseContextExam;