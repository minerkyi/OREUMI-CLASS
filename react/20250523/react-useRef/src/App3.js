import { useRef, useState } from "react";

export default function Stopwatch() {
  // 시작한 시간
  const startTime = useRef(0);
  // 인터벌함수의 id
  const intervalId = useRef(null);

  const [secondsPassed, setSecondsPassed] = useState(0);

  const [isRunning, setIsRunning] = useState(false);



  function handleStart() {
    // 새로운 시작 시간을 계산하기
    startTime.current = Date.now() - secondsPassed;

    // 새로운 시작 시간을 바탕으로 흘러간 시간을 계산하기
    intervalId.current = setInterval(() => {
      setSecondsPassed(Date.now() - startTime.current);
    }, 10);

    setIsRunning(true);
  }

  function handleStop() {
    clearInterval(intervalId.current);
    setIsRunning(false);
  }

  function handleReset() {
    clearInterval(intervalId.current);
    setSecondsPassed(0);
    setIsRunning(false);
  }

  return (
    <>
      <h1>Time passed: {(secondsPassed / 1000).toFixed(3)}</h1>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
