const Challenge = () => {
  const valor1 = 10;
  const valor2 = 15;

  const handleClick = () => {
    console.log(valor1 + valor2);
  }

  return (
    <div>
      <p>primeiro valor: {valor1}</p>
      <p>segundo valor: {valor2}</p>
      <button onClick={handleClick}>Clique aqui para somar os valores</button>
    </div>
  );
};

export default Challenge;