function Hello({ name, age }) {
    return (
        <div>
            <h1>안녕하세요, {name}님!</h1>
            <p>당신의 나이는 {age}세입니다.</p>
        </div>
    );
}

function Hi() {
  return <p>안녕하세요</p>
}

export {Hello, Hi};