const BackComp = ({propData2, onMyEvent2}) => {
  const liRows = [];

  let keyCnt=0;
  for(let row of propData2){
    liRows.push(
      <li key={keyCnt++}>{row}</li>
    );
  }

  return (<>
    <li><a href="/" onClick={(event)=>{
      event.preventDefault();
      onMyEvent2('백앤드 클릭됨(자식전달)');
    }}>백앤드</a></li>
    <ul>
      {liRows}       
    </ul>
  </>)
}

export default BackComp;