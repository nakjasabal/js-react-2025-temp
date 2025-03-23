import { firestore } from '../firestoreConfig';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

const FireCreate = () => {

  const navigate = useNavigate();

  //Firestore에 내용 입력 
  const memberWrite = async (p_collection, p_id, p_pass, p_name) => {
    //doc()으로 컬렉션과 도큐먼트를 생성 후 setDoc()으로 내용 입력 
    await setDoc(doc(firestore, p_collection, p_id), {      
      id: p_id,
      pass: p_pass,
      name: p_name,
      regdate: new Date().toISOString().slice(0, 10).replace('T', ' '),
    });    
    alert('입력 성공')
    navigate('/read');
  }

  return (<>
    <h2>Firestore - 입력하기</h2>
    <form onSubmit={(event) => {
      //이벤트 차단 
      event.preventDefault();

      //입력한 폼값을 target 속성으로 얻어옴 
      let collection = event.target.collection.value;
      let id = event.target.id.value;
      let pass = event.target.pass.value;
      let name = event.target.name.value;

      //입력값이 없는 경우 경고창 띄움 
      if(id===''){ alert('아이디를 입력하세요'); return;}
      if(pass===''){ alert('비밀번호를 입력하세요'); return;}
      if(name===''){ alert('이름을 입력하세요'); return;}
      
      //입력값을 인자로 입력함수 호출 
      memberWrite(collection, id, pass, name);

      //재입력을 위해 input 비움 
      event.target.id.value = '';
      event.target.pass.value = '';
      event.target.name.value = '';
    }}>
      {/* 부트스트랩 스타일이 적용된 테이블 */}
      <table border='1'>
        <tbody>
          <tr>
            <td>컬렉션(테이블)</td>
            <td><input type="text" name="collection" value="members" readOnly /></td>
          </tr>
          <tr>
            <td>아이디</td>
            <td><input type="text" name="id" /></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type="text" name="pass" /></td>
          </tr>
          <tr>
            <td>이름</td>
            <td><input type="text" name="name" /></td>
          </tr>
        </tbody>
      </table>
      <button type="submit">입력</button>
    </form>
  </>);
}

export default FireCreate;