import { useState } from "react";

export const useConter = (valorInicial) => {
  const [counter, setCounter] = useState(valorInicial);

  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  const Reset = () => {
    setCounter(valorInicial);
  };

  return {Increment, Decrement, Reset, counter}
};
