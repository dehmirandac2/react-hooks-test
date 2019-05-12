import React, { useState } from 'react';

const MultiplosStates = () => {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('maçã');
  const [todos, setTodos] = useState([{ text: 'Aprendendo Hooks' }]);
  
  return (
    <div>
      <p>Minha idade é {age}</p>
      <p>Minha fruta preferida é {fruit}</p>
      <p>Eu estou {todos[0].text}</p>
    </div>
  );
}

export default MultiplosStates;