import {useState, useEffect} from 'react';

const GlobalTop = (props) => {
  console.log('1.컴포넌트실행');
  var [myList, setMyList] = useState([]); 

  useEffect(() => {    
    console.log('3.useEffect실행1');
    fetch('./json/myData.json')
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        console.log(json);      
        setMyList(json);
      });
    return ()=>{
      console.log('4.useEffect실행2');
    }
  }, []);

  var listTag = myList.map((data) => {
    return (
      <li key={data.id}>
        <a href={data.id} data-id={data.num} onClick={(e)=>{
          e.preventDefault();
          props.myLinkClick(e.target.dataset.id);
        }}>{data.id}</a>
      </li>
    );
  });

  console.log('2.return실행(rendering)');  
  return (
    <nav>
      <ul>
        {listTag}
      </ul>
    </nav>
  );
}

const ContentBody = (props)=>{
  return (
    <div>
      <h2>{props.myResult.name}</h2>
      <ul>
        <li>num : {props.myResult.num}</li>
        <li>id : {props.myResult.id}</li>
        <li>cell : {props.myResult.cell}</li>
        <li>description : {props.myResult.description}</li>
      </ul>        
    </div>
  );
}

function App() {  
  var [myResult, setMyResult] = useState({});  
  return (
    <div className="App">
      <h2>React - 내부서버통신</h2>
      <GlobalTop myLinkClick={(num)=>{
        console.log('클릭', num);
        fetch('./json/dto'+num+'.json')
          .then((result)=>{
            console.log('결과1', result);
            return result.json();
          })
          .then((json)=>{
            console.log('결과2', json);
            setMyResult(json);
          });
      }}></GlobalTop>
      <ContentBody myResult={myResult}></ContentBody>
    </div>
  );
}

export default App;
