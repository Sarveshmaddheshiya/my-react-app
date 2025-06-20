function Wrapper({ children }) {
  return (
    <>
      <h1>Passing JSX from another component using Props</h1>
      <p className="wrapper">{children}</p>
    </>
  );
}

export default Wrapper;