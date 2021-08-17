import React, { useState } from 'react';

export default function Tabuada() {
  const [tabuadaInput, setTabuadaInput] = useState(0);
  const [tabuadaOutput, setTabuadaOutput] = useState([]);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (event:any) => {
    setTabuadaInput(event.target.value);
  };

  const generateTabuada = () => {
    const result:any = numbers.map((number) => number * tabuadaInput);
    setTabuadaOutput(result);
  };

  if (tabuadaInput <= 0) setTabuadaInput(1);

  return (
    <section>
      <div>
        <input type="number" placeholder="Insira qual tabuada vc quer" onChange={handleChange} />
        <button type="button" onClick={generateTabuada}>Gerar tabuada</button>
      </div>
      <ul style={{ listStyle: 'none' }}>
        {tabuadaOutput.map((result, index) => (
          <li key={result}>
            {`${tabuadaInput} X ${index + 1} = ${result}`}
          </li>
        ))}
      </ul>
    </section>
  );
}
