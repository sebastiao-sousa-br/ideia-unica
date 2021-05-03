import { useState } from 'react';

function Home() {
  return (
    <dev>
      <h1>Home</h1>
      <Contador />
    </dev>
  )  
}

function Contador() {
  const [contador,setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <dir>{contador}</dir>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

export default Home