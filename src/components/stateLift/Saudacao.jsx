function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}, seja bem-vindo(a)!`;
  }

  return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>;
}

export default Saudacao;
