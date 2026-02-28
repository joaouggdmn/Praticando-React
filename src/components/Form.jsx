function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    alert(`Usuário cadastrado com sucesso!`);
  }

  return (
    <div>
      <h1>Cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="Nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
