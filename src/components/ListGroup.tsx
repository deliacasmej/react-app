function ListGroup() {
  const items = ["New York", "London", "Tokyo", "Paris", "Chicago"];

  const message = items.length === 0 ? <p>No items found</p> : null;

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
