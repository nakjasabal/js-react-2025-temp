import React from "react";
import { useRef } from "react";

function ChatStart() {
  const refRoom = useRef();
  const refUser = useRef();

  function openChatWin() {
    window.open(`/chat/talk?room=${refRoom.current.value}&user=${refUser.current.value}`, '', 'width=500, height=650');
  }

  return (
    <>
      <div className="App">
        방명 : <input type="text" name="room" ref={refRoom} />
        대화명 : <input type="text" name="user" ref={refUser} />
        <button type="button" onClick={(event) => {
          event.preventDefault();
          if (refRoom.current.value === '') {
            alert('방명을 작성하세요.');
            return;
          }
          if (refUser.current.value === '') {
            alert('사용자를 작성하세요.');
            return;
          }
          openChatWin();
        }}>채팅 시작</button>
      </div>
    </>
  );
}

export default ChatStart;