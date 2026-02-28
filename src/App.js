import './App.css';

function App(){

 const name = "João";
 const newName = name.toUpperCase();

function formatName(name){
  return name.toUpperCase();
}

 function sum(a, b){
  return a+b;
 }

 const url = 'https://via.placeholder.com/150';

  return(
    <div className='App'>
      <h1>Alterando JSX</h1>
      <h3>Olá, {formatName("Joao")}!</h3>
      <a>Soma: {sum(2,5)}</a>
      <img src={url} alt="Imagem Placeholder"></img>
    </div>
  )
}

export default App;