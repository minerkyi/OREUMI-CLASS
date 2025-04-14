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

const API_URL = 'https://dev.wenivops.co.kr/services/fastapi-crud'

function signup(username, password) {
    fetch(`${API_URL}/1/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
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

function getUserList() {
    fetch(`${API_URL}/1/login_user_info`).then((response) => {
        if(!response.ok) {
            throw new Error('유저 정보 조회에 실패했습니다.');
        }
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error('유저 정보 조회 오류:', error);
    });
}

async function login(username, password) {
    try {
        const response = await fetch(`${API_URL}/1/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        });

        if(!response.ok) {
            throw new Error('로그인에 실패했습니다.');
        }
        
        const data = await response.json();
        if(data?.message === 'Login success') {
            alert(`환영합니다! ${username}님!`);
        } else {
            $loginError.innerText = '아이디 혹은 비밀번호가 일치하지 않습니다.';
            $loginError.style.display = 'block';
        }
    } catch(error) {
        console.log('Error:', error);
        $loginError.innerText = '아이디 혹은 비밀번호가 일치하지 않습니다.';
        $loginError.style.display = 'block';
    }
}

// function login(username, password) {
    // return fetch(`${API_URL}/1/login`, {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //         username: username,
    //         password: password
    //     })
    // }).then((response) => {
//         if(!response.ok) {
//             throw new Error('로그인에 실패했습니다.');
//         }
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         if(data?.message === 'Login success') {
//             // Login Success
//             return data;
//         } else {
//             // Login failed
//             throw new Error('아이디 혹은 비밀번호가 일치하지 않습니다.');
//         }
//     });
// }

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

    
    // 3. 로그인 서버 이용
    login(username, password); // async, await
    // login(username, password).then((data) => {
    //     console.log('로그인 성공', data);

    //     alert(`환영합니다! ${username}님!`);
    // }).catch((error) => {
    //     console.error('로그인 실패', error);

    //     $loginError.innerText = '아이디 혹은 비밀번호가 일치하지 않습니다.';
    //     $loginError.style.display = 'block';
    // });

    // 3. 로그인 시도
    // 아이디와 비밀번호 값이 있을 때 로그인 시도
    // const loginResult = loginRequest(username, password);
    // const loginResult = login(username, password);

    // 4. 로그인의 결과
    // 성공: alert
    // 실패: 아이디 혹은 비밀번호가 일치하지 않습니다. 오류 발생
    // if(loginResult) {
    //     alert(`환영합니다! ${username}님!`);
    // } else {
    //     $loginError.innerText = '아이디 혹은 비밀번호가 일치하지 않습니다.';
    //     $loginError.style.display = 'block';
    // }
});