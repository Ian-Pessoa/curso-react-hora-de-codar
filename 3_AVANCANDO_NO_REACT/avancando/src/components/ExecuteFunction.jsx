// eslint-disable-next-line react/prop-types
const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique aqui para executar a função!</button>
    </div>
  );
};

export default ExecuteFunction;