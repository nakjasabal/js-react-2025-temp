import '../Chat.css';
// 리얼타임 데이터베이스 연결 및 객체 얻어오기 
import { realtime } from '../realtimeConfig';
// 리얼타임 데이터베이스 사용을 위한 함수
import { ref, child, set, onValue, push } from "firebase/database";
// React Hook 
import { useState, useEffect, useRef } from 'react';
// Router Hook 
import { useSearchParams } from 'react-router-dom';

//스크롤바를 최하단으로 내려주기 위한 JS 함수 
const scrollTop = (chatWindow) => {
  console.log('scrollTop 호출됨');
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

//컴포넌트 정의 
function ChatMessage() {
  //쿼리스트링으로 전달된 파라미터를 조작할때 사용하는 라우터 훅 
  const [searchParams, setSearchParams] = useSearchParams();
  //방명과 대화명을 파라미터로 얻어온다. 
  const roomId = searchParams.get('roomId');
  const userId = searchParams.get('userId');
  //채팅 내역이 보여지는 부분의 DOM 참조 
  const chatWindow = useRef();
  //채팅 데이터 저장용 State 
  const [chatData, setChatData] = useState('');

  //Realtime에 대화내역 저장 
  function messageWrite(chatRoom, chatId, chatMessage) {
    //고유키 생성(데이터 저장시 중복되지 않는 일련번호와 같이 사용됨) 
    const newPostKey = push(child(ref(realtime), 'tempValue')).key;
    /** 
    데이터 저장시 '방명'이 최상위 node가 되고, 하위에 '고유키'로 구분하여 
    대화내용을 저장한다. 입력된 순서가 지켜지므로 별도의 정렬은 필요없다. 
    입력데이터는 대화명과 내용으로 구성된다. 
     */
    set(ref(realtime, chatRoom + '/' + newPostKey), {
      id: chatId,
      message: chatMessage
    });
    console.log('입력성공');
  }

  //Realtime 리스너 정의. 새롭게 입력된 대화내용을 실시간으로 얻어온다. 
  //채팅내역이 있는 'room1' node를 통해 참조를 생성 
  const dbRef = ref(realtime, roomId);
  useEffect(() => {    
    //리스너 생성 
    onValue(dbRef, (snapshot) => {
      let showDiv = [];      
      snapshot.forEach((childSnapshot) => {
        // const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        //console.log("리스너", childKey, childData.id, userId);

        //대화내용은 종류에 따라 좌/우측 정렬한다. 
        if(childData.id===userId){
          //내가 보낸 메세지라면 '우측'으로 정렬해서 출력한다. 
          showDiv.push(<div className='myMsg' 
          style={{'textAlign':'right'}}>{childData.message}</div>);
        }
        else{
          //상대방이 보낸 메세지는 좌측으로 정렬한다. 
          showDiv.push(<div>{childData.message}</div>);
        }
        //스크롤바를 최하단으로 내려준다. 
        scrollTop(chatWindow.current);
      });
      //State를 변경해서 대화내역을 새롭게 렌더링한다. 
      setChatData(showDiv);
    });
  }, []);

  return (<>
    <div className="App">
      <h2>Realtime 채팅</h2>
      대화명 : {userId} &nbsp;&nbsp;
      <button id="closeBtn" onClick={() => {window.self.close();}}>
        채팅 종료</button>

      {/* 채팅 내역이 출력되는 부분. ref를 사용하고 있다. */}
      <div id="chatWindow" ref={chatWindow}>
        {chatData}
      </div>
      <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            //target으로 폼값 얻어오기
            let chatRoom = e.target.chatRoom.value;
            let chatId = e.target.chatId.value;
            //빈값에 검증 
            if(chatId===''){
              alert('대화명을 입력하세요');
              return;
            }
            let message = e.target.message.value;
            if(message===''){
              alert('메세지를 입력하세요');
              return;
            }
            console.log('submit', chatRoom, chatId, message);
            //입력한 폼값을 정리해서 Realtime에 입력
            messageWrite(chatRoom, chatId, message);
            //입력이 완료되면 <input>을 비워준다. 
            e.target.message.value = '';
        }}>
          <input type="hid-den" name="chatRoom" value={roomId} />
          <input type="hid-den" name="chatId" value={userId} />
          <input type="text" name="message" />
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  </>);
}

export default ChatMessage;
