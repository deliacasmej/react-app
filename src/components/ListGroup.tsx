function ListGroup() {
  const items = ["New York", "London", "Tokyo", "Paris", "Chicago"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
