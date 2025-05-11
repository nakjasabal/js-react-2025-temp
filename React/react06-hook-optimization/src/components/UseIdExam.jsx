import { useId, useEffect } from "react";

const MyForm = () => {
  const userId = useId();
  const commonId = useId();
  console.log("생성된Id", userId, commonId);
  useEffect(() => {
    document.getElementById(userId).focus();
  }, []);
  return (
    <div>
      <label htmlFor={userId}>아이디</label>
      <input type="text" id={userId} name="id" />
      <br />
      <label htmlFor={`${commonId}-name`}>이름</label>
      <input type="text" id={`${commonId}-name`} name="name" />
      <br />
      성별      
      <input type="radio" id={`${commonId}-gender1`} name="gender" />
      <label htmlFor={`${commonId}-gender1`}>남자</label>
      <input type="radio" id={`${commonId}-gender2`} name="gender" />
      <label htmlFor={`${commonId}-gender2`}>여자</label>
    </div>
  );
}

const UseIdExam = () => {
  return (<>
    <h2>useId() 사용하기</h2>
    <MyForm />
  </>);
}

export default UseIdExam;