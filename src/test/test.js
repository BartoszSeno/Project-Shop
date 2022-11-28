function Test({ saveItem }) {
  return (
    <>
      {saveItem.map((item) => (
        <div>{item.gamename}</div>
      ))}
    </>
  );
}

export default Test;
