import { useId } from "react";

/**
useId()는 고유한 아이디를 생성해준다. DOM의 아이디를 부여하거나
라벨링을 할 때 편리하다. 

각 컴포넌트별로 여러개의 DOM을 추가해야 하는 경우에는 useId로 하나의
아이디를 생성한 후 -xxx 와 같은 형태로 추가적인 이름을 부여해서 
사용할 수 있다. 

HTML <label> 태그는 체크박스나 라디오와 함께 사용된다. 
label태그의 for 속성과 input태그의 id 속성이 일치하면 하나의 
요소로 라벨링되어 텍스트를 클릭해도 input에 포커싱된다. 
단 for는 JS의 예약어 이므로 JSX 에서는 htmlFor라고 작성해야
한다.
 */
const MyForm = () => {
  const userId = useId();
  const commonId = useId();
  console.log("생성된Id", userId, commonId);
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