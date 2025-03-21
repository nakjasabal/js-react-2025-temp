import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function Edit() {  
  //페이지 이동
  const navigate = useNavigate();
  //파라미터 읽어오기 
  let params = useParams();
  console.log("수정idx", params.idx);

  // let [boardData, setBoardData] = useState({});
  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
  let parameter = "tname=nboard_news&idx="+params.idx;

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  
  useEffect(function(){
    fetch(requestUrl +"?"+ parameter)
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        console.log(json);      
        // setBoardData(json);
        //<input>에 설정해야 하는 값의 State변경 
        setWriter(json.name);
        setTitle(json.subject);
        setContents(json.content);
      });
  }, []);

  return (<>
    <header>
      <h2>게시판-수정</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>
    </nav>
    <article>
    <form onSubmit={
      (event)=>{
        event.preventDefault();

        //폼값정리
        let i = event.target.idx.value;
        let w = event.target.writer.value;
        let t = event.target.title.value;
        let c = event.target.contents.value;
        console.log(w, t, c);

        //수정API호출
        fetch('http://nakja.co.kr/APIs/php7/boardEditJSON.php', {
          method: 'POST',
          headers: {
            'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: new URLSearchParams({
            tname: 'nboard_javascript',
            id: 'jsonAPI',
            name: w,
            subject: t,
            content: c,
            idx: i,
          }),
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        navigate("/view/"+params.idx);
		  }
    }>
      <input type='hidden' name='idx' value={params.idx} />      
      <table id="boardTable">
        <tbody>
          <tr>
            <th>작성자</th>
            <td><input type="text" name="writer" value={writer} 
              onChange={(event)=>{
                setWriter(event.target.value);
              }} 
            /></td>
          </tr>
          <tr>
            <th>제목</th>
            <td><input type="text" name="title" value={title} 
              onChange={(event)=>{
                setTitle(event.target.value);
              }} 
            /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea name="contents" rows="3" value={contents} 
              onChange={(event)=>{
                setContents(event.target.value);
              }}
            ></textarea></td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="전송" />
    </form>    
    </article>
  </>);
}

export default Edit;
