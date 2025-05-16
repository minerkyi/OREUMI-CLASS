import { useState } from "react";

export default function Counter() {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h2>카운터: {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );

  // const [count, setCount] = useState(0);
  // const [disabled, setMinus] = useState(true);

  // function clickAdd() {
  //   setCount(count + 1);
  //   setMinus(false);
  // }

  // function clickMinus() {
  //   if(count - 1 === 0) setMinus(true);
  //   setCount(count - 1);
  // }

  // return (
  //   <div>
  //     <p>{count}</p>
  //     <button onClick={clickAdd}>+</button>
  //     <button onClick={clickMinus} disabled={disabled}>-</button>
  //   </div>
  // );
}