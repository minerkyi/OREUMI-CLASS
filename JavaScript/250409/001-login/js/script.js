// 1. DOM 요소 선택
const $loginForm = document.getElementById('login-form');

const $usernameInput = document.getElementById('username');
const $passwordInput = document.getElementById('password');
const $rememberCheckbox = document.getElementById('remember');
const $labelRemember = $rememberCheckbox.parentElement;
const $loginBtn = document.getElementById('login-btn');

const $usernameError = document.getElementById('username-error');
const $passwordError = document.getElementById('password-error');
const $loginError = document.getElementById('login-error');

function loginRequest(username, password) {
    const USER = {
        username: 'weniv',
        password: '1234',
    };
    if(username === USER.username && password === USER.password) {
        return true;
    } else {
        return false;
    }
}

$loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // submit 기본 동작을 막을 수가 있다.

    // 1. 사용자가 입력한 아이디(username), 비밀번호
    const username = $usernameInput.value;
    const password = $passwordInput.value;

    // 2. 유효성 검사
    // 아이디 값이 비어있으면 -> 아이디를 입력하세요.
    const isUsernameValid = username.trim() !== '';
    if(isUsernameValid) {
        // 유효한 경우 -> 오류 정보를 제거
        $usernameInput.classList.remove('error');
        $usernameError.style.display = 'none';
    } else {
        // 유효하지 않은 경우 -> 오류 정보를 추가
        $usernameInput.classList.add('error');
        $usernameError.innerText = '아이디를 입력해주세요.';
        $usernameError.style.display = 'block';
        $usernameInput.focus();
        return;
    }
    // 비밀번호 값이 비어있으면 -> 비밀번호를 입력하세요.
    const isPasswordValid = password.trim() !== '';
    if(isPasswordValid) {
        $passwordInput.classList.remove('error');
        $passwordError.style.display = 'none';
    } else {
        $passwordInput.classList.add('error');
        $passwordError.innerText = '비밀번호를 입력해주세요.';
        $passwordError.style.display = 'block';
        $passwordInput.focus();
        return;
    }

    // 입력값이 있을 때 오류 정보를 초기화
    $usernameInput.addEventListener('input', () => {
        $usernameError.style.display = 'none';
        $usernameInput.classList.remove('error');
        $loginError.style.display = 'none';
    });

    $passwordInput.addEventListener('input', () => {
        $passwordError.style.display = 'none';
        $passwordInput.classList.remove('error');
        $loginError.style.display = 'none';
    });

    $rememberCheckbox.addEventListener('change', () => {
        // if($rememberCheckbox.checked) {
        //     $labelRemember.classList.add('checked');
        // } else {
        //     $labelRemember.classList.remove('checked');
        // }
        $labelRemember.classList.toggle('checked');
    });

    // 3. 로그인 시도
    // 아이디와 비밀번호 값이 있을 때 로그인 시도
    const loginResult = loginRequest(username, password);

    // 4. 로그인의 결과
    // 성공: alert
    // 실패: 아이디 혹은 비밀번호가 일치하지 않습니다. 오류 발생
    if(loginResult) {
        alert(`환영합니다! ${username}님!`);
    } else {
        $loginError.innerText = '아이디 혹은 비밀번호가 일치하지 않습니다.';
        $loginError.style.display = 'block';
    }
});