import { firestore } from '../firestoreConfig';
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FireUpdate = () => {
  //파라미터 
  const params = useParams();
  console.log("idx", params.idx);
  const navigate = useNavigate();

  //<input> 에 설정된 값은 State를 통해 변경해야 하므로 갯수만큼 선언 
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  //도큐먼트 수정 함수 
  const memberEdit = async (p_collection, p_id, p_pass, p_name) => {
    //기존 입력 함수와 동일함. 즉 데이터가 있으면 수정 처리된다. 
    await setDoc(doc(firestore, p_collection, p_id), {      
      id: p_id,
      pass: p_pass,
      name: p_name,
      regdate: new Date().toISOString().slice(0, 10).replace('T', ' '),
    });
    alert("수정 성공");
    navigate('/read');
  }

  const getMember = async (user_id) => {       
    //컬렉션명과 아이디(도큐먼트 명)를 통해 데이터의 참조를 얻어온다. 
    const docRef = doc(firestore, "members", user_id);
    //참조값을 통해 해당 도큐먼트를 얻어온다. 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      //해당 문서가 존재하면 데이터를 인출한 후 .. 
      console.log("Document data:", docSnap.data());
      let callData = docSnap.data();
      //각 State를 변경하여 <input>에 값을 추가한다. 
      setId(user_id);
      setPass(callData.pass);
      setName(callData.name);
    } 
    else {
      console.log("No such document!");
    }
  }
 
  //화면의 렌더링이 끝난 후 실행되는 수명주기 함수(훅)
  useEffect(() => {    
    getMember(params.idx);
  }, []); 

  return (<>
    <h2>Firestore - 수정하기</h2>
    <form onSubmit={(event) => {
      event.preventDefault();
      //submit 이벤트 발생시 폼값을 얻어온다. 
      let collection = event.target.collection.value;
      let id = event.target.id.value;
      let pass = event.target.pass.value;
      let name = event.target.name.value;

      //아이디만 빈값 검증 
      if(id===''){ alert('사용자를 먼저 선택해주세요'); return;}

      //수정을 위한 함수 호출 
      memberEdit(collection, id, pass, name);
    }}>
      <table border='1'>
      <tbody>
        <tr>
          <td>컬렉션(테이블) </td>
          <td><input type="text" name="collection" value="members" 
            className="form-control" readOnly /></td>
        </tr>
        <tr>
          <td>아이디(변경불가)</td>
          <td><input type="text" name="id" value={id} className="form-control" 
            readOnly /></td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td><input type="text" name="pass" value={pass} className="form-control" 
            onChange={(event)=>{
              setPass(event.target.value);
            }} /></td>
        </tr>
        <tr>
          <td>이름</td>
          <td><input type="text" name="name" value={name} className="form-control" 
            onChange={(event)=>{
              setName(event.target.value);
            }} /></td>
        </tr>
      </tbody>
      </table>
      <button type="submit">수정</button>
    </form>
  </>);
}

export default FireUpdate;