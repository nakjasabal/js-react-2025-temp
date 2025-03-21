import List3Item from "./List3Item";

const List2Layout = () => {
  const items = ["Item 1", "Item 2", "Item 3"]; // 더미 데이터

  return (
    <div className="list-wrapper">
      <ul>
        {items.map((item, index) => (
          <List3Item key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default List2Layout;
