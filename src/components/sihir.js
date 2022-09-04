import React, { useState } from 'react';

export default function Sihir() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [total, setTotal] = useState(0);

  function handleNumber1Change(e) {
    setNumber1(Number(e.target.value));
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
  }

  function handleNumber2Change(e) {
    setNumber2(+e.target.value);
  }
  function handleNumber3Change(e) {
    setNumber3(+e.target.value);
  }

  function calculateTotal() {
    setTotal((70 * number1 + 21 * number2 + 15 * number3) % 105);
  }
  function sayi(uc, bes, yedi) {
    var sayi = 70 * uc + 21 * bes + 15 * yedi;
    return sayi % 105;
  }

  return (
    <div className="App">
      <h1>10 ile 100 arasında bir sayı tut</h1>

      <div className="number-inputs">
        <label>3'e bölümünden kalan</label>
        <input
          type="number"
          placeholder="0"
          onChange={handleNumber1Change}
          max={2}
          min={0}
        />
        <br />
        <label>5'e bölümünden kalan</label>
        <input
          type="number"
          placeholder="0"
          onChange={handleNumber2Change}
          max={4}
          min={0}
        />
        <br />
        <label>7'ye bölümünden kalan</label>
        <input
          type="number"
          placeholder="0"
          onChange={handleNumber3Change}
          max={6}
          min={0}
        />
        <br />
      </div>

      <button onClick={calculateTotal}>Hesapla!</button>

      <h2>{total}</h2>
    </div>
  );
}
