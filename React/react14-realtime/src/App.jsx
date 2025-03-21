import './App.css';
//라우터 처리를 위한 임포트 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
//컴포넌트 모듈화 후 임포트 
import RealtimeCRUD from './components/RealtimeCRUD';
import Listener from './components/Listener';
import ChatStart from './components/ChatStart';
import ChatMessage from './components/ChatMessage';
 
function App() {
  return (
    // 라우터 처리를 위해 적용할 전체 컴포넌트를 래핑 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RealtimeCRUD/>} />
        <Route path='/crud' element={<RealtimeCRUD/>} />
        <Route path='/listener' element={<Listener/>} />
        <Route path='/chat'>
          <Route index element={<ChatStart/>} />
          <Route path="talk" element={<ChatMessage/>} />
        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;