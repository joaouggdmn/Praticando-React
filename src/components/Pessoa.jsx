function Pessoa({nome, idade, profissão, foto}){
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2>{nome}</h2>
            <p>{idade} anos</p>
            <p>{profissão}</p>
        </div>
    )
}

export default Pessoa;