import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    alert(`Email enviado com sucesso!`);
  }

  return (
    <div>
      <h2>Cadastre o seu email</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar
        </button>
        {userEmail && (
            <div>
                <p>O email do usuário é: {userEmail}</p>
                <button onClick={() => setUserEmail('')}>Limpar email</button>
            </div>
        )}
      </form>
    </div>
  );
}
export default Condicional;
