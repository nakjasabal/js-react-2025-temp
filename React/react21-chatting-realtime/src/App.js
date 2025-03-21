import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import ChatStart from './components/ChatStart';
import ChatMessage from './components/ChatMessage';
 
function App() {  
  return (
    <HashRouter>
    {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={<ChatStart />} />          
        <Route path='/chat'>
          <Route index element={<ChatStart />} />
          <Route path="talk" element={<ChatMessage />} />
        </Route>
      </Routes>
    {/* </BrowserRouter> */}
    </HashRouter>  
  );
}

export default App;

