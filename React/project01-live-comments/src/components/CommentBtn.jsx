const CommentBtn = ({newOpenModal}) => {
  return (<>
    {/* 댓글 작성 버튼 */}
    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#commentModal" onClick={()=>newOpenModal()}>
      댓글 작성
    </button>
  </>);
}
export default CommentBtn;