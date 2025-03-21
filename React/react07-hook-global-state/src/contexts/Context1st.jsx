import Context2nd from './Context2nd';

const Context1st = () => {
  return (
    <div className='ctxb'>
      <h3>Context1st 컴포넌트</h3>
      <li>전달되는 값 없음</li>
      <Context2nd />
    </div>  
  );
}
export default Context1st;
 