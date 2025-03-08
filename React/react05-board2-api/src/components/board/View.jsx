import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';

function View() {
  //중첩라우터로 처리된 경로에서 idx를 얻어오기 위해 Hook생성
  let params = useParams();
  console.log("idx", params.idx);

  const navigate = useNavigate();
  //빈객체를 초기값으로 한 State생성
  let [boardData, setBoardData] = useState({});
  //요청Url과 쿼리스트링을 나눠서 정의 
  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
  let parameter = "tname=nboard_news&idx="+params.idx;
  
  //API요청 
  useEffect(function(){
    fetch(requestUrl +"?"+ parameter)
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        console.log(json);
        //콜백데이터로 State 변경 
        setBoardData(json);
      });
  }, []);

  return (<>
    <header>
      <h2>게시판-읽기</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>&nbsp; 
      <Link to={"/edit/"+params.idx}>수정</Link>&nbsp; 
      <Link onClick={() => {
        if(window.confirm('삭제하시겠습니까?')){
          console.log('삭제idx', params.idx);
          //삭제는 post방식으로 요청. 
          fetch("http://nakja.co.kr/APIs/php7/boardDeleteJSON.php", {
            method: 'POST',
            headers: {
              /* <form> 태그의 디폴트 인코딩방식과 케릭셋 지정 */
              'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: new URLSearchParams({
              tname: 'nboard_news',
              idx: params.idx,
            }),
          })
          .then((result)=>{
            return result.json();
          })
          .then((json)=>{
            console.log(json);
            if(json.result==='success'){
              alert('삭제되었습니다.');
              navigate("/list");
            }
            else{
              alert('삭제에 실패했습니다.');
            }
          });
        }
      }}>삭제</Link>
    </nav>
    <article>
      <table id="boardTable">
        <colgroup>
          <col width="20%" /><col width="*" />
        </colgroup>
        <tbody>
          <tr>
            <th>작성자</th>
            <td>{boardData.name}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>{boardData.subject}</td>
          </tr>
          <tr>
            <th>날짜</th>
            <td>{boardData.regdate}</td>
          </tr>
          <tr>
            <th>내용</th>
            {/* HTML태그가 그대로 출력된다. React는 보안적인 문제로
            태그를 화면에 그대로 출력하는것이 디폴트 설정이다. */}
            {/* <td>{boardData.content}</td> */}
            {/* 마크업이 적용된 상태로 출력된다. */}
            <td dangerouslySetInnerHTML={{__html: boardData.content}}></td>
          </tr>
          <tr>
            <th>내용2</th>
            <td>{boardData.content}</td>
          </tr>
        </tbody>
      </table> 
    </article>
  </>);
}

export default View;
