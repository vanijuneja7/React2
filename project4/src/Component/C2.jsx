import React from 'react'

const C2 = ({ num1 = 5, num2 = 3 }) => {
  return (
    <div>
    <button onClick={() => alert(num1 + num2)}>+ {num1 + num2}</button> 
    <button onClick={() => alert(num1 - num2)}>- {num1 - num2}</button>
    <button onClick={() => alert(num1 * num2)}>* {num1 * num2}</button>
    </div>
  )
}

export default C2

```
