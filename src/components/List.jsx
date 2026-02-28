import Item from "./Item";

function List(){
    return(
        <>
            <h1>Minha Lista de Tarefas</h1>
            <ul>
                <Item marca="Nike" anoLancamento={1985}/>
                <Item marca="Adidas" anoLancamento={1949}/>
                <Item marca="Puma" anoLancamento={1948}/>
                <Item/>
            </ul>
        </>
    )
}

export default List;