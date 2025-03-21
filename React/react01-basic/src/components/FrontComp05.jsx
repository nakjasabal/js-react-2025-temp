//이 방식은 일반 함수로 정의했을때만 가능
//화살표 함수에서는 이 방식을 사용할 수 없음 
export default function FrontComp(props) {
  const liRows = [];

  for(let i=0 ; i<props.propData1.length ; i++){    
    liRows.push(
      <li key={i}>{props.propData1[i]}</li>
    );
  }

  return (<>
    <li><a href='/' onClick={(event)=>{
      event.preventDefault();
      props.onMyEvent1();
    }}>프론트앤드</a></li>
    <ul>
      {liRows}
    </ul>
  </>)
}