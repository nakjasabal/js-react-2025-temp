import { useState } from 'react';
import FrontComp from './components/FrontComp'
import BackComp from './components/BackComp'

function App() {
  const frontData = ['HTML5', 'CSS3', 'Javascript', 'jQuery'];
  const backData = ['Java', 'Oracle', 'JSP', 'Spring Boot'];

  const [mode, setMode] = useState('both');
  let contents = '';
  if(mode==='front'){
    contents = <>
      <FrontComp propData1={frontData} 
        onMyEvent1={(mode)=>{
          setMode(mode);
        }}
      ></FrontComp>
    </>
  }
  else if(mode==='back'){
    contents = <>
      <BackComp propData2={backData} 
        onMyEvent2={(mode)=>{
          setMode(mode);
        }}
      />
    </>
  }
  else{
    contents = <>
      <FrontComp propData1={frontData} 
        onMyEvent1={(mode)=>{
          setMode(mode);
        }}
      ></FrontComp>
      <BackComp propData2={backData} 
        onMyEvent2={(mode)=>{
          setMode(mode);
        }}
      />      
    </>
  }

  return (<>
    <div>
      <h2><a href="/" onClick={(event)=>{      
        event.preventDefault();
        setMode('both');
      }}>React-State</a></h2>
      <ol>
        {contents}
      </ol>
    </div>
  </>)
}

export default App
