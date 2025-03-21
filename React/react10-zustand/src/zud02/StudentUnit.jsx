import useStudentStore from "./useStudentStore";

// 학생 컴포넌트
const StudentUnit = ({ id, name, isHere }) => {
  const { deleteStudent, toggleAttendance } = useStudentStore();

  let nameStyle = { 
    textDecoration: isHere ? 'line-through' : 'none', 
    color: isHere ? 'gray' : 'black', cursor : 'pointer' 
  };
  return (
    <div>
      <span style={nameStyle} onClick={() => toggleAttendance(id)} >
        {name}
      </span>
      <button onClick={() => {
          if (window.confirm('삭제할까요?')) {
            deleteStudent(id);
          }
      }}>삭제</button>
    </div>
  );
};

export default StudentUnit;