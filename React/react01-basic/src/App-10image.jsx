import reactImage from './assets/Reactjs.png';
import reactLogo from './assets/react.svg'

function App() {
  return (<>
    <div>
      <h2>React-이미지</h2>
      
      <h4>public 폴더 하위의 이미지</h4>
      <img src="/img/React.png" style={{width:'150px'}} />
      
      <h4>src/assets 폴더 하위의 이미지</h4>
      <img src={reactImage} style={{width:'150px'}} />
      
      <h4>vite 기본 프로젝트에서 제공되는 이미지</h4>
      <img src={reactLogo} style={{width:'150px'}} />
    </div>
  </>)
}

export default App
