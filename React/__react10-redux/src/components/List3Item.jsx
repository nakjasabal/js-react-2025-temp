const List3Item = ({ text }) => {
  return (
    <li className="list-item">
      <span>{text}</span>
      <button className="delete-button">삭제</button>
    </li>
  );
};

export default List3Item;
