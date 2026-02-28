function Eventos({ num }) {
  function meuEvento() {
    console.log(`Ativando primeiro evento ${num}`);
  }

  return (
    <div>
      <h1>EVENTO</h1>
      <p>Clique para executar uma ação</p>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  );
}

export default Eventos;
