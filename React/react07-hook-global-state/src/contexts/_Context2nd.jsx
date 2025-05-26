import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Context2nd = () => {
  const contextData = useContext(GlobalContext);
  return (
    <div className='ctxb'>
      <h4>Context2nd 컴포넌트</h4>
      <li>ContextValue : {contextData.str}</li>
      <li>GlobalNum : {contextData.num}</li>
    </div>  
  );
}
export default Context2nd;
