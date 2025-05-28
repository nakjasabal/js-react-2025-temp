import { useState } from "react";
import BoardView from './components/BoardView';
import CommentBtn from './components/CommentBtn';
import CommentList from './components/CommentList';
import ModalWindow from './components/ModalWindow';

function App() {
  const [boardData, setBoardData] = useState([
    {idx:1 , writer:'낙자쌤', postdate:'2025-05-27', contents:'댓글 작성을 구현해봅니다.', likes:0},
  ]);
  //입력상자
  const [iWriter, setIWriter] = useState('');
  const [iContents, setIContents] = useState('');
  const [editIdx, setEditIdx] = useState(null);
  //시퀀스
  const [nextVal, setNextVal] = useState(2);

  //댓글 작성 및 수정
  const saveComment = () => {
    if(editIdx===null){ // 댓글 작성
      const sysdate = new Date().toISOString().slice(0, 16).replace('T', ' ');
      const newData = {
        idx:nextVal , writer:iWriter, postdate:sysdate, contents: iContents, likes: 0
      };
      setBoardData([...boardData, newData]);
      setNextVal(nextVal+1);
    }
    else{ //댓글 수정
      const editData = boardData.map(row => {
        return (row.idx===editIdx) ? {...row, writer:iWriter, contents: iContents} : row;
      });
      setBoardData(editData);
    }

    setIWriter('');
    setIContents('');    
  }

  //좋아요
  const plusLike = (idx) => {
    const newData = boardData.map(row => {
      return (row.idx===idx) ? {...row, likes: row.likes+1} : row;
    });
    setBoardData(newData);
  }

  //댓글삭제
  const deleteComment = (idx) => {
    if(confirm('댓글을 삭제할까요?')){
      const newData = boardData.filter(row => {
        return row.idx!==idx ;
      });
      setBoardData(newData);
    }
  }

  //댓글수정
  const editComment = (idx) => {
    console.log(`${idx}번 게시물 수정하기`);
    const editData = boardData.find(row => row.idx === idx);
    if (editData) {
      setIWriter(editData.writer);
      setIContents(editData.contents);
      setEditIdx(idx);
    }
  }
    
  //댓글 작성을 위해 모달창을 열면 입력폼 초기화
  const newOpenModal = () => {
    setIWriter('');
    setIContents('');
    setEditIdx(null);
  };

  return (<>
    <div className="container mt-4">
      <BoardView />
      <CommentBtn newOpenModal={newOpenModal} />
      <ModalWindow saveComment={saveComment} editIdx={editIdx}
        iWriter={iWriter} setIWriter={setIWriter} 
        iContents={iContents} setIContents={setIContents} />      
      <CommentList boardData={boardData} plusLike={plusLike} 
        deleteComment={deleteComment} editComment={editComment} />
    </div>
  </>);
};

export default App;
