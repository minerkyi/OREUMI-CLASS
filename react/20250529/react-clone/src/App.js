function App() {

  function throttle(callback, delay) {

  let timerId = null;

  return () => {
    if(timerId === null) {
      timerId = setTimeout(() => {
        
        callback();
  
        timerId = null;
      }, delay);
    }
  };
}

const consoleLog = () => {
  console.log('console!!');
};

const throttleHandler = throttle(consoleLog, 500);

window.addEventListener('scroll', throttleHandler);

  return (
    <div style={{height: '1200px'}}>
      hello world
    </div>
  );
}



export default App;
