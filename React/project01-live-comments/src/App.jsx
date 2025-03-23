import { useState } from 'react';

const PostView = () => (
  <div className="card mb-4">
    <div className="card-body">
      <h5 className="card-title">게시글 제목</h5>
      <p className="card-text">이곳에 게시글의 내용이 들어갑니다.</p>
    </div>
  </div>
);

const CommentButton = () => (
    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#commentModal">
      댓글 작성
    </button>
);

const CommentModal = ({ newPost, setNewPost, addComment }) => (
  <div className="modal fade" id="commentModal" tabIndex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="commentModalLabel">댓글 작성</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <textarea className="form-control" rows="3" placeholder="댓글을 입력하세요" value={newPost} onChange={(e) => setNewPost(e.target.value)}></textarea>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
          <button type="button" className="btn btn-primary" onClick={addComment} data-bs-dismiss="modal">작성</button>
        </div>
      </div>
    </div>
  </div>
);

const CommentList = (props) => (
  <ul className="list-group mt-3">
    {props.commentsData.map((comment) => (
      <li key={comment.id} className="list-group-item">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <strong>{comment.author}</strong> <small className="ms-2">{comment.date}</small>
          </div>
          <div>
            <button className="btn btn-outline-success btn-sm me-2" onClick={() => props.likeComment(comment.id)}>좋아요 ({comment.likes})</button>
            <button className="btn btn-outline-danger btn-sm" onClick={() => props.deleteComment(comment.id)}>삭제</button>
          </div>
        </div>
        <p className="mt-2 mb-0">{comment.content}</p>
      </li>
    ))}
  </ul>
);
/**
new Date():
new Date()는 현재 날짜와 시간을 나타내는 JavaScript Date 객체를 생성합니다.
.toISOString():
toISOString() 메서드는 Date 객체를 ISO 8601 형식의 문자열로 변환합니다. ISO 8601 형식은 YYYY-MM-DDTHH:mm:ss.sssZ와 같습니다.
.slice(0, 16):
slice(0, 16) 메서드는 ISO 8601 형식의 문자열에서 처음 16자만 추출합니다. 이렇게 하면 YYYY-MM-DDTHH:mm 형식의 문자열이 남습니다.
.replace('T', ' '):
replace('T', ' ') 메서드는 문자열에서 "T" 문자를 공백(" ") 문자로 바꿉니다. 이렇게 하면 YYYY-MM-DD HH:mm 형식의 문자열이 됩니다.
 */
const App = () => {
    const [commentsData, setCommentsData] = useState([]);
    const [newPost, setNewPost] = useState('');

    const addComment = () => {
      if (newPost.trim() === '') return;
      const newEntry = {
        id: Date.now(),
        author: '사용자',
        date: new Date().toISOString().slice(0, 16).replace('T', ' '),
        content: newPost,
        likes: 0,
      };
      setCommentsData([...commentsData, newEntry]);
      setNewPost('');
    };

    const deleteComment = (id) => {
      if(confirm('정말 삭제할까요?'))
        setCommentsData(commentsData.filter(comment => comment.id !== id));
    };

    const likeComment = (id) => {
      setCommentsData(commentsData.map(comment =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      ));
    };

    return (
      <div className="container mt-4">
        <PostView />
        <CommentButton />
        <CommentModal newPost={newPost} setNewPost={setNewPost} addComment={addComment} />
        <CommentList commentsData={commentsData} likeComment={likeComment} deleteComment={deleteComment} />
      </div>
    );
};

export default App;
