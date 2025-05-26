//매개변수 props로 값을 받아서 출력한다. 
const CompProps2 = (props) => {
  return (
    <div className='ctxb'>
      <h4>Props2 컴포넌트</h4>
      <li>propData : {props.propData2}</li>
      <li>propNumber : {props.propNumber2}</li>
    </div>  
  );
}
export default CompProps2;
