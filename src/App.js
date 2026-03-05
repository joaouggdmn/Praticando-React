import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";
import Eventos from "./components/event/Eventos";
import Form from "./components/event/Form";

function App() {
  const name = "Pedro";

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name={name} />
      <Pessoa
        nome={name}
        idade="25"
        profissão="Desenvolvedor"
        foto="https://via.placeholder.com/150"
      /> 
      <List/>
      <Eventos num={2}/>
      <Form />
    </div>
  );
}

export default App;
