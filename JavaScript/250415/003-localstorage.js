// 1. 로컬 스토리지

// 개발자 도구 -> Application

// 1-1. 값 저장
localStorage.setItem('isLogedIn', true);
localStorage.setItem('theme-color', 'light');

// 객체 -> 문자열
const user = {
  id: 1,
  name: '위니브',
};
localStorage.setItem('user', JSON.stringify(user));
console.log(localStorage);

// 1-2. 값 가져오기
const isLogedIn = localStorage.getItem('isLogedIn');
console.log('isLogedIn:', isLogedIn);

const themeColor = localStorage.getItem('theme-color');
console.log('themeColor:', themeColor);

// 문자열 -> 객체
const userStorage = JSON.parse(localStorage.getItem('user'));
console.log('userStorage:', userStorage);

// 1-3. 값 지우기
localStorage.removeItem('user');
// localStorage.clear();

// 2. 세션 스토리지
console.log(sessionStorage);

sessionStorage.setItem('session', 1);
sessionStorage.setItem('user', JSON.stringify(user));

// 2-2. 값 가져오기
const session = sessionStorage.getItem('session');
console.log('session:', session);
const sessionUser = sessionStorage.getItem('user');
console.log(JSON.parse(sessionUser));
console.log(sessionStorage);

// 2-3. 값 지우기
sessionStorage.removeItem('session');
// sessionStorage.clear();

// 세션 스토리지는 탭을 닫거나, 브라우저를 종료하면 데이터가 사라짐
// -> 탭이 열려있을 때만 데이터를 유지

// 3. 쿠키
console.log(document.cookie);