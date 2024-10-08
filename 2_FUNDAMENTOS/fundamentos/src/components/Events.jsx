const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log('ativou o evento');
  }

  const renderSomething = (x) => {
    if(x) {
      return <h1>Renderizando isso!</h1>
    } else {
      return <h1>Também posso renderizar isso!</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log('Clicou!')}>Clique aqui também</button>
      </div>
      <div>
        <button 
          onClick={() => {
            // eslint-disable-next-line no-constant-condition
            if (true) {
              console.log("Isso não deveria existir =)");
            }
          }}
        >
          Clica aqui, por favor.
        </button>
      </div>
      {renderSomething(false)}
    </div>
  );
};

export default Events;