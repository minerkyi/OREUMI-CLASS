// [실습] 회원가입, 로그인

// 1. 회원가입
// 2. 로그인 함수
// 3. 사용자 정보 조회
// (추가) 로그인 실습에 연결
function signup(name, password) {
  fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: name,
      password: password
    })
  }).then((response) => {
    if(!response.ok) {
      throw new Error('회원가입 실패');
    }
    return response.json();
  }).then((data) => {
    console.log(data.message);
  }).catch((error) => {
    console.error('Error:', error);
  });
}

function login(name, password) {
  fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: name,
      password: password
    })
  }).then((response) => {
    if(!response.ok) {
      throw new Error('로그인 실패');
    }
    return response.json();
  }).then((data) => {
    console.log(data.message);
  }).catch((error) => {
    console.error('Error:', error);
  });
}

function loginInfo() {
  fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/login_user_info').then((response) => {
    if(!response.ok) {
      throw new Error('조회 실패');
    }
    return response.json();
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.error('Error:', error);
  });
}
signup('miner', '0000');
login('miner', '0000');
loginInfo();
