import React from 'react'
import C2 from './C2';

const C3 = () => {
  const num1 = 5;
  const num2 = 3;

  return (
    <div>
      <C2 num1={num1} num2={num2} />
      <div>
        <label>Result:</label>
        <input type="number" id="result" readOnly value={(num1 + num2)} />
      </div>
    </div>
  )
}

export default C3
