import Props2nd from '../contexts/Props2nd';

const Props1st = ( {propData, propNumber} ) => {
  return (
    <div className='ctxb'>
      <h3>Props1 컴포넌트</h3>
      <li>propData : {propData}</li>
      <li>propNumber : {propNumber}</li>      
      <Props2nd propData2={propData} propNumber2={propNumber} />
    </div>  
  );
}
export default Props1st;
