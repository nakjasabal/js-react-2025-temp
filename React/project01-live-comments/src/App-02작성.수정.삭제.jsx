import { useState } from 'react';

const PostView = () => (
  <div className="card mb-4">
    <div className="card-body">
      <h5 className="card-title">댓글 작성 구현하기</h5>
      <p className="card-text">
        구현할 기능은 댓글작성, 좋아요, 수정, 삭제입니다. <br />
        기능 구현은 아래 댓글 작성부터 하면 됩니다.
      </p>
    </div>
  </div>
);

const CommentButton = ({ openWriteModal }) => (
  <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#commentModal" onClick={openWriteModal}>
    댓글 작성
  </button>
);

const CommentModal = ({
  newPost,
  setNewPost,
  newAuthor,
  setNewAuthor,
  saveComment,
  isEditMode
}) => (
  <div className="modal fade" id="commentModal" tabIndex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="commentModalLabel">{isEditMode ? '댓글 수정' : '댓글 작성'}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="commentAuthor" className="form-label">작성자명</label>
            <input
              type="text"
              className="form-control"
              id="commentAuthor"
              placeholder="이름을 입력하세요"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
            />
          </div>
          <label htmlFor="commentContent" className="form-label">댓글 내용</label>
          <textarea
            className="form-control"
            id="commentContent"
            rows="3"
            placeholder="댓글을 입력하세요"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          ></textarea>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
          <button type="button" className="btn btn-primary" onClick={saveComment} data-bs-dismiss="modal">
            {isEditMode ? '수정 완료' : '작성'}
          </button>
        </div>
      </div>
    </div>
  </div>
);

const CommentList = ({ commentsData, likeComment, deleteComment, editComment }) => (
  <ul className="list-group mt-3">
    {commentsData.map((comment) => (
      <li key={comment.id} className="list-group-item">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <strong>{comment.author}</strong> <small className="ms-2">{comment.date}</small>
          </div>
          <div>
            <button className="btn btn-outline-success btn-sm me-2" onClick={() => likeComment(comment.id)}>
              좋아요 ({comment.likes})
            </button>
            <button className="btn btn-outline-warning btn-sm me-2" data-bs-toggle="modal" data-bs-target="#commentModal" onClick={() => editComment(comment.id)}>
              수정
            </button>
            <button className="btn btn-outline-danger btn-sm" onClick={() => deleteComment(comment.id)}>
              삭제
            </button>
          </div>
        </div>
        <p className="mt-2 mb-0" style={{'whiteSpace':'pre-wrap'}}>{comment.content}</p>
      </li>
    ))}
  </ul>
);

const App = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [editId, setEditId] = useState(null);

  const openWriteModal = () => {
    setNewPost('');
    setNewAuthor('');
    setEditId(null); // 새 댓글 작성 시 수정 모드 초기화
  };

  const saveComment = () => {
    if (newAuthor.trim() === '' || newPost.trim() === '') return;

    const now = new Date().toISOString().slice(0, 16).replace('T', ' ');

    if (editId !== null) {
      // 수정
      setCommentsData(commentsData.map(comment =>
        comment.id === editId
          ? { ...comment, content: newPost, author: newAuthor, date: now }
          : comment
      ));
    } 
    else {
      // 새 댓글 작성
      const newEntry = {
        id: Date.now(),
        author: newAuthor,
        date: now,
        content: newPost,
        likes: 0,
      };
      setCommentsData([...commentsData, newEntry]);
    }

    setNewPost('');
    setNewAuthor('');
    setEditId(null);
  };

  const deleteComment = (id) => {
    if (confirm('정말 삭제할까요?')) {
      setCommentsData(commentsData.filter(comment => comment.id !== id));
    }
  };

  const likeComment = (id) => {
    setCommentsData(commentsData.map(comment =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    ));
  };

  const editComment = (id) => {
    const toEdit = commentsData.find(comment => comment.id === id);
    if (toEdit) {
      setNewPost(toEdit.content);
      setNewAuthor(toEdit.author);
      setEditId(id);
    }
  };

  return (
    <div className="container mt-4">
      <PostView />
      <CommentButton openWriteModal={openWriteModal} />
      <CommentModal newPost={newPost} setNewPost={setNewPost} newAuthor={newAuthor}
        setNewAuthor={setNewAuthor} saveComment={saveComment} isEditMode={editId !== null}
      />
      <CommentList commentsData={commentsData} likeComment={likeComment}
        deleteComment={deleteComment} editComment={editComment}
      />
    </div>
  );
};

export default App;
