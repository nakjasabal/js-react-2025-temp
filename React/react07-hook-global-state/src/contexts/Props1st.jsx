import Props2nd from '../contexts/Props2nd';

//부모에서 전달된 Props를 {}를 이용해서 이름 그대로 전달받는다. 
const Props1st = ( {propData, propNumber} ) => {
  return (
    <div className='ctxb'>
      <h3>Props1 컴포넌트</h3>
      <li>propData : {propData}</li>
      <li>propNumber : {propNumber}</li>      
      {/* Props를 통해 하위 컴포넌트로 다시 전달한다.  */}
      <Props2nd propData2={propData} propNumber2={propNumber} />
    </div>  
  );
}
export default Props1st;
