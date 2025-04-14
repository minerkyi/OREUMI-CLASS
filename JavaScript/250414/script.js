const API_URL = "https://dev.wenivops.co.kr/services/fastapi-crud";

async function getUserList() {
  try {
    const response = await fetch(`${API_URL}/1/login_user_info`);

    if(!response.ok) {
      throw new Error("유저 정보 조회에 실패했습니다.");
    }

    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.error("유저 정보 조회 오류:", error);
  }
}
getUserList();

// function getUserList() {
//   fetch(`${API_URL}/1/login_user_info`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("유저 정보 조회에 실패했습니다.");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("유저 정보 조회 오류:", error);
//     });
// }

async function login(username, password) {
  try{
    const response = await fetch(`${API_URL}/1/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    });

    if(!response.ok) {
      throw new Error("로그인에 실패했습니다.");
    }

    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.error("로그인 오류:", error);
  }
}
login('miner', '0000');

// function login(username, password) {
//   return fetch(`${API_URL}/1/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("로그인에 실패했습니다.");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       if (data?.message === "Login success") {
//         // Login Success
//         return data;
//       } else {
//         // Login Failed
//         throw new Error("아이디 혹은 비밀번호가 일치하지 않습니다.");
//       }
//     });
// }