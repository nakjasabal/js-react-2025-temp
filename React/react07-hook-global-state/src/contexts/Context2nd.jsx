import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Context2nd = () => {
  const contextData = useContext(GlobalContext);
  return (
    <div className='ctxb'>
      <h4>Context2nd 컴포넌트</h4>
      {/* 컨텍스트 프로바이더로 랩핑할때 value속성을 통해 전달된 데이터를 
      공유받게 된다. 이 데이터는 JSON객체이므로 아래와 같이 사용할 수 있다. */}
      <li>ContextValue : {contextData.str}</li>
      <li>GlobalNum : {contextData.num}</li>
    </div>  
  );
}
export default Context2nd;
