import './App.css';

function App() {
  const name = "라이캣";
  return (
    <div>
      {/* JSX 주석 */}
      <h1>안녕 {name}!</h1>
      <h1>안녕 {name}!</h1>
      {/* 태그는 무조건 닫아줘야 함 */}
      {/* <h1>안녕 */}
      <div />
      {/* 'class' 속성은 'className'으로 사용해야 함 */}
      <div className="newClass"></div>
      <div style={{width: "100px", height: "200px", backgroundColor: "blue"}}></div>
    </div>
  );
}

export default App;
