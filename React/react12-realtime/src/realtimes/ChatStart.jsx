import { useRef } from 'react';
import TopNavi from '../components/TopNavi';

const ChatStart = () => {
  //<input> 태그의 DOM을 활용하기 위해 useRef 훅 생성 
  const refRoom = useRef(); //채팅방의 이름
  const refId = useRef(); //접속자의 아이디 

  /**
  open() 함수를 통해 채팅창을 팝업으로 오픈한다. 
    형식] open(팝업창의 요청 URL, 창의이름, 창의속성);
      두번째 인수인 창의이름을 부여하면, 새로운 창을 열었을때 항상 같은 위치에서
      오픈된다. 따라서 창의이름을 부여하지 않아야 새로운 창을 열 수 있다. 
   */
  const openChatWin = () => {
    window.open(`/chat/talk?roomId=${refRoom.current.value}&userId=${refId.current.value}`, 
      '', 'width=400,height=500');
  }
  
  return (<>    
    <TopNavi></TopNavi>
    <h2>Realtime Database - Chatting</h2>
    {/* <input> 태그에 앞에서 생성한 Ref변수를 추가하여 DOM에 접근한다. */}
    방명 : <input type="text" name="roomId" value="room1" ref={refRoom} /> <br />
    대화명 : <input type="text" name="userId" ref={refId} /> <br />
    {/* 채팅을 위한 팝업창을 오픈한다. */}
    <button type="button" onClick={openChatWin}>채팅시작</button>
  </>);
};

export default ChatStart;