import React, { useState } from "react";

export default function Counter() {
  const valorInicial = { contadorUno: 1, contadorDos: 2 };
  const [counter, setCounter] = useState(valorInicial);
  const { contadorUno, contadorDos } = counter;

  //INCREMENTAR
  const Increment = () => {
    setCounter({
      ...counter,
      contadorUno: contadorUno + 1,
      contadorDos: contadorDos + 2,
    });
  };
  //DECREMENTAR
  const Decrement = () => {
    setCounter({
      ...counter,
      contadorUno: contadorUno - 1,
      contadorDos: contadorDos - 1,
    });
  };
  //RESET
  const Reseteador = () => {
    setCounter(valorInicial);
  };

  return (
    <>
      <h1>contadorUno: {contadorUno}</h1>
      <h1>contadorDos: {contadorDos}</h1>
      <button onClick={Increment}>+1</button>
      <button onClick={Reseteador}>Reset</button>
      <button onClick={Decrement}>-1</button>
    </>
  );
}
