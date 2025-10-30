import React from "react";
import { useConter } from "../hooks/useConter.js";

export default function About() {
  const { Increment, Decrement, Reset, counter } = useConter(2);
  return (
    <>
      <h3>si tu cosecha vaca tu siembra vacaneria{counter}</h3>
      <button onClick={Increment}>+1</button>
      <button onClick={Reset}>Reseteaaaaaaaaaaa</button>
      <button onClick={Decrement}>menouno</button>
    </>
  );
}
