import { useState } from "react";

function App3() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if(id === '') {
      alert('아이디를 입력하세요.');
    }

    if(password === '') {
      alert('비밀번호를 입력하세요.');
    }
    console.log('id: ', id, 'password: ', password, '로그인이 완료되었습니다.');
    setId('');
    setPassword('');
  };

  const handleLoginInput = (e) => {
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleLogin}>
        <label>아이디:
          <input type="text" onChange={handleLoginInput} />
        </label>
        <label>비밀번호:
          <input type="text" onChange={handlePasswordInput} />
        </label>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default App3;