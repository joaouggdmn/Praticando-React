import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";

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
      
    </div>
  );
}

export default App;
