import "./App.css";
import { useState } from "react";
import SeuNome from "./components/stateLift/SeuNome";
import Saudacao from "./components/stateLift/Saudacao";

function App() {
  const [nome, setNome] = useState();
  return (
    <div className="App">
      <h1>State lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

export default App;
