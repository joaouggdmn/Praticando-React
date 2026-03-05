import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log(pass);
    alert(`Usuário cadastrado com sucesso!`);
  }

  const [name, setName] = useState();
  const [pass, setPass] = useState();

  return (
    <div>
      <h1>Cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
