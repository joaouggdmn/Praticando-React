import Buttom from "./Buttom";

function Eventos({ num }) {
  
  function meuEvento() {
    console.log(`Ativando primeiro evento ${num}`);
  }
  function segundoEvento() {
    console.log("Ativando segundo evento");
  }

  return (
    <div>
      <h1>EVENTO</h1>
      <p>Clique para executar uma ação</p>
      <Buttom event={meuEvento} text="Primeiro botao" />
      <Buttom event={segundoEvento} text="Segundo botao" />
    </div>
  );
}

export default Eventos;
