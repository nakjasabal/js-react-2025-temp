import './App.css';
import {useState, useReducer} from 'react';

//학생 컴포넌트 
const Student = ({name, dispatch, id, isHere}) => {
  return (<>
    <div>
      {/* 학생이름. 클릭시 출석 기능 토글됨. */}
      <span style={{
        textDecoration: isHere ? 'line-through' : 'none',
        color: isHere ? 'gray' : 'black',
      }}
      onClick={() => {
        dispatch({type:'mark', param:{ id }})
      }}>{name}</span>
      {/* 삭제 버튼 */}
      <button onClick={() => {
        if(window.confirm('삭제할까요?')){
          dispatch({type:'delete', param:{ id }});
        }
      }}>삭제</button>
    </div>
  </>);
}

//리듀서 함수. 이전의State와 Action을 매개변수로 정의. 
const reducer = (state, action) => {
  switch(action.type){
    case 'add'://학생추가 
      //파라미터 받기
      const name = action.param.name;
      //새로운 학생 객체 생성 
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      }
      //State를 반환하여 즉시 적용 
      return {
        // 학생 수 증가
        count: state.count + 1,
        // 스프레드 연산자를 통해 기존 배열에 새로운 객체 추가 
        students: [...state.students, newStudent],
      }
    case 'delete': //삭제
      return {
        count: state.count -1, 
        students: state.students.filter(
          student => student.id !== action.param.id
        )
      }
    case 'mark':
      return {
        count: state.count,
        students: state.students.map((student) => {
          if(student.id === action.param.id){
            return {...student, isHere: !student.isHere};
          }
          return student;
        })
      }
    default:
  }
}

//앱에서 사용할 데이터 객체 
const initialState = {
  count :1,
  students : [
    {
      id: Date.now(), name: '김철수', isHere: false,
    },
  ],
}

function App() {
  //입력할 학생의 이름
  const [name, setName] = useState('');
  //Reducer변수 생성. studentInfo는 initialState를 초기값으로 설정. 
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>총학생수 : {studentInfo.count}</p>
      {/* 추가할 학생의 이름을 입력 */}
      <input type="text" placeholder='이름을입력하세요' 
        value={name} onChange={(e) => { 
          setName(e.target.value)
        }} />
      {/* 버튼을 누르면 dispatch를 통해 Action(객체)을 reducer로 
      전달하여 학생을 추가한다. */}
      <button onClick={() => {
        dispatch({type:'add', param:{name}});
      }}>추가</button>
      {/* 데이터에 입력된 학생수만큼 반복하여 <Student> 컴포넌트를
      출력한다. */}
      {
        studentInfo.students.map((student) => {
          // 컴포넌트에서 사용할 값을 Props로 전달 
          return <Student key={student.id} name={student.name} 
            dispatch={dispatch} id={student.id} 
            isHere={student.isHere} />
        })
      }
    </div>
  );
}

export default App;

