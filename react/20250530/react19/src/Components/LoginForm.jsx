import React, { useRef, useState } from 'react'

export default function LoginForm() {

  const inputId = useRef('');
  const inputPw = useRef('');

  const handleLogin = (e) => {
    const id = inputId.current.value;
    const pw = inputPw.current.value;
    
    if(id.trim() === '' || pw.trim() === '') {
      e.preventDefault();
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    inputId.current.value = '';
    inputPw.current.value = '';
  };

  return (
    <>
      <h1>로그인</h1>
      <form>
        <label htmlFor="userId">아이디:</label>
        <input type="text" id='userId' name='userId' placeholder='아이디를 입력하세요' ref={inputId} autoComplete='username' />
        <br />
        <label htmlFor="userPw">비밀번호:</label>
        <input type="password" id='userPw' name='userPw' placeholder='비밀번호를 입력하세요' ref={inputPw} autoComplete='current-password' />
        <br />
        <button onClick={handleLogin}>로그인</button>
        <button onClick={handleReset}>초기화</button>
      </form>
    </>
  )
}