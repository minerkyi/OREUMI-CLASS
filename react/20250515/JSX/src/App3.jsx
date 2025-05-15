import './App3.css';

const list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function Item(props) {
  return <li className={props.data.visited ? 'visited' : null}>{props.data.area}</li>
}

function App3() {
  const items = list.map((item) => {
    return <Item key={item.no} data={item} />;
  });
  return (
    <ul>
      {items}
      {/*
      <Item />
      <Item />
      <Item />
      <Item />
    */}
    </ul>
  );

  // return (
  //   <ul>
  //     {list.map((item) => {
  //       return <li key={item.no} className={item.visited ? 'active' : null}>{item.area}</li>
  //     })}
  //   </ul>
  // );
}

export default App3;