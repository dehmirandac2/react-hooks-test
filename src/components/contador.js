import React, { useState, useEffect } from 'react';

const Contador = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;
  }, [count]); // Apenas re-execute o efeito quando o count mudar;

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Contador;