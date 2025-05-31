import { useState, useEffect } from "react";

function App() {
  const [boardData, setBoardData] = useState([]);
  const [iWriter, setIWriter] = useState('');
  const [iContents, setIContents] = useState('');
  const [editIdx, setEditIdx] = useState(null);
  const [nextVal, setNextVal] = useState(2); 

  // 초기 데이터 로드
  useEffect(() => {
    const savedData = localStorage.getItem('boardData');
    const savedSeq = localStorage.getItem('nextVal');
    if (savedData) {
      setBoardData(JSON.parse(savedData));
      setNextVal(Number(savedSeq) || 2);
    } else {
      const initial = [{ idx: 1, writer: '낙자쌤', postdate: '2025-05-27', contents: '댓글 작성을 구현해봅니다.', likes: 0 }];
      setBoardData(initial);
      localStorage.setItem('boardData', JSON.stringify(initial));
      localStorage.setItem('nextVal', '2');
    }
  }, []);

  const updateStorage = (data, seq) => {
    localStorage.setItem('boardData', JSON.stringify(data));
    localStorage.setItem('nextVal', String(seq));
  };

  const saveComment = () => {
    if (editIdx === null) {
      const sysdate = new Date().toISOString().slice(0, 16).replace('T', ' ');
      const newData = {
        idx: nextVal,
        writer: iWriter,
        postdate: sysdate,
        contents: iContents,
        likes: 0
      };
      const updated = [...boardData, newData];
      setBoardData(updated);
      setNextVal(nextVal + 1);
      updateStorage(updated, nextVal + 1);
    } else {
      const updated = boardData.map(row =>
        row.idx === editIdx ? { ...row, writer: iWriter, contents: iContents } : row
      );
      setBoardData(updated);
      updateStorage(updated, nextVal);
    }
    setIWriter('');
    setIContents('');
  };

  const plusLike = (idx) => {
    const updated = boardData.map(row =>
      row.idx === idx ? { ...row, likes: row.likes + 1 } : row
    );
    setBoardData(updated);
    updateStorage(updated, nextVal);
  };

  const deleteComment = (idx) => {
    if (confirm('댓글을 삭제할까요?')) {
      const updated = boardData.filter(row => row.idx !== idx);
      setBoardData(updated);
      updateStorage(updated, nextVal);
    }
  };

  const editComment = (idx) => {
    console.log(`${idx}번 게시물 수정하기`);
    const editData = boardData.find(row => row.idx === idx);
    if (editData) {
      setIWriter(editData.writer);
      setIContents(editData.contents);
      setEditIdx(idx);
    }
  };

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
}

export default App;

// 컴포넌트들 아래에 모듈화 없이 정의
const BoardView = () => {
  return (<>
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">댓글 작성 구현하기</h5>
        <p className="card-text">
          구현할 기능은 댓글작성, 좋아요, 수정, 삭제입니다. <br />
          기능 구현은 아래 댓글 작성부터 하면 됩니다.
        </p>
      </div>
    </div>
  </>);
};

const CommentBtn = ({ newOpenModal }) => {
  return (<>
    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#commentModal" onClick={() => newOpenModal()}>
      댓글 작성
    </button>
  </>);
};

const CommentList = ({ boardData, plusLike, deleteComment, editComment }) => {
  return (<>
    {boardData.map((row) => {
      return (
        <ul className="list-group mt-3" key={row.idx}>
          <li className="list-group-item">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <strong>{row.writer}</strong> <small className="ms-2">{row.postdate}</small>
              </div>
              <div>
                <button className="btn btn-outline-success btn-sm" onClick={() => plusLike(row.idx)}>좋아요 ({row.likes})</button>
                <button className="btn btn-outline-warning btn-sm" data-bs-toggle="modal" data-bs-target="#commentModal" onClick={() => editComment(row.idx)}>수정</button>
                <button className="btn btn-outline-danger btn-sm" onClick={() => deleteComment(row.idx)}>삭제</button>
              </div>
            </div>
            <p className="mt-2 mb-0" style={{ whiteSpace: 'pre-wrap' }}>
              {row.contents}
            </p>
          </li>
        </ul>
      );
    })}
  </>);
};

const ModalWindow = ({ saveComment, editIdx, iWriter, setIWriter, iContents, setIContents }) => {
  const btnTitle = (editIdx === null) ? '작성' : '수정';
  const btnColor = (editIdx === null) ? 'primary' : 'warning';

  return (<>
    <div className="modal fade" id="commentModal" tabIndex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="commentModalLabel">댓글 {btnTitle}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="commentAuthor" className="form-label">작성자명</label>
              <input type="text" className="form-control" id="commentAuthor" placeholder="이름을 입력하세요"
                value={iWriter} onChange={(e) => setIWriter(e.target.value)} />
            </div>
            <label htmlFor="commentContent" className="form-label">댓글 내용</label>
            <textarea className="form-control" id="commentContent" rows="3" placeholder="댓글을 입력하세요"
              value={iContents} onChange={(e) => setIContents(e.target.value)}></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" className={"btn btn-" + btnColor} onClick={saveComment} data-bs-dismiss="modal">{btnTitle}</button>
          </div>
        </div>
      </div>
    </div>
  </>);
};
