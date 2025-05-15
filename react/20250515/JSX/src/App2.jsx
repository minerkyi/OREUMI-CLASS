function App2() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  return <dl>
    <dt>년: </dt>
    <dd>
      <time dateTime={year}>{year}</time>
    </dd>
    <dt>월/일: </dt>
    <dd>
      <time dateTime={month + 1 + '-' + date}>{month + 1}/{date}</time>
    </dd>
    <dt>시간: </dt>
    <dd>
      <time dateTime={hour + ":" + minute + ":" + second}>{hour}시 {minute}분 {second}초</time>
    </dd>
  </dl>



  // const date = new Date();
  // return (
  //   <div>
  //     <p>년 : {date.getFullYear()}</p>
  //     <p>월/일 : {date.getMonth()+1}/{date.getDate()}</p>
  //     <p>시간 : {date.getHours()}시 {date.getMinutes()}분 {date.getSeconds()}초</p>
  //   </div>
  // );
}

export default App2;