// DOM 요소
const userForm = document.getElementById("user-form");
const userIdInput = document.getElementById("user-id");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const submitBtn = document.getElementById("submit-btn");

const usersList = document.getElementById("users-list");
const messageContainer = document.getElementById("message-container");
const totalUsersCount = document.getElementById("total-users");

// 폼 초기화 함수
function resetForm() {
  userIdInput.value = "";
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  submitBtn.textContent = "추가";

  // 취소 버튼이 있으면 제거
  const cancelBtn = document.querySelector(".cancel-btn");
  if (cancelBtn) {
    cancelBtn.remove();
  }
}
// API 엔드포인트 URL (json-server)
const API_URL = "http://localhost:3000/";

// TODO: 사용자 목록에 대하여 CRUD 함수를 구현합니다.
/**
 * 사용자 목록 조회 함수
 * @async
 * @function fetchUsers
 * @description 받아온 응답을 renderUsers 함수에 전달하여 사용자 목록을 렌더링합니다.
 */
async function fetchUsers() {
  // GET /users
  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
      throw new Error("HTTP 오류 발생:", response.status);
    }

    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error("사용자 조회 중 오류 발생:", error);
  }
}

/**
 * 사용자 생성 함수
 * @async
 * @function createUser
 * @param {Object} userData - 생성할 사용자 데이터
 * @description 사용자를 생성하고, 성공 시 입력 폼을 초기화하고 사용자 목록을 갱신합니다.
 */
async function createUser(userData) {
  // POST /users
  try {
    // localhost:3000/users
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("HTTP 오류 발생:", response.status);
    }

    const newUser = await response.json();
    alert(`${newUser.name} 사용자가 성공적으로 추가되었습니다.`);

    resetForm();
    fetchUsers();
  } catch (error) {
    console.error("사용자 생성 중 오류 발생:", error);
  }
}

/**
 * 사용자 수정 함수
 * @async
 * @function updateUser
 * @param {number} userId - 수정할 사용자 ID
 * @param {Object} userData - 수정할 사용자 데이터
 * @description 사용자를 수정하고, 성공 시 입력 폼을 초기화하고 사용자 목록을 갱신합니다.
 */
async function updateUser(userId, userData) {
  // PUT /users/{user_id}
  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("HTTP 오류 발생:", response.status);
    }

    const updateUser = await response.json();
    alert(`${updateUser.name} 정보가 업데이트 되었습니다.`);

    resetForm();
    fetchUsers();
  } catch (error) {
    console.error("사용자 정보 업데이트 중 오류 발생:", error);
  }
}

/**
 * 사용자 삭제 함수
 * @async
 * @function deleteUser
 * @param {number} userId - 삭제할 사용자 ID
 * @description 사용자를 삭제하고, 성공 시 사용자 목록을 갱신합니다.
 */
async function deleteUser(userId) {
  // DELETE /users/{user_id}

  const check = confirm("정말로 삭제하시겠습니까?");
  if (!check) return;

  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("HTTP 오류 발생:", response.status);
    }

    alert("사용자가 삭제되었습니다.");
    fetchUsers();
  } catch (error) {
    console.error("사용자 삭제 중 오류 발생:", error);
  }
}

// 사용자 목록 렌더링 함수
function renderUsers(users) {
  usersList.innerHTML = "";

  if (users.length === 0) {
    usersList.innerHTML =
      '<li class="user-item">등록된 사용자가 없습니다.</li>';
    return;
  }

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.className = "user-item";

    listItem.innerHTML = `
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="user-email">${user.email}</div>
                <div class="user-phone">${user.phone || "-"}</div>
            </div>
            <div>
                <button class="action-btn edit-btn" data-id="${
                  user.id
                }">수정</button>
                <button class="action-btn delete-btn" data-id="${
                  user.id
                }">삭제</button>
            </div>
        `;

    // 수정 버튼 이벤트 리스너
    listItem
      .querySelector(".edit-btn")
      .addEventListener("click", () => editUser(user));

    // 삭제 버튼 이벤트 리스너
    listItem
      .querySelector(".delete-btn")
      .addEventListener("click", () => deleteUser(user.id));

    usersList.appendChild(listItem);
  });
}

// 폼 제출 처리 함수
async function handleFormSubmit(event) {
  event.preventDefault();

  const userData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
  };

  // 폼 유효성 검사
  if (!userData.name || !userData.email) {
    alert("이름과 이메일은 필수 입력 항목입니다.");
    return;
  }

  const userId = userIdInput.value;

  if (userId) {
    // 사용자 수정
    await updateUser(userId, userData);
  } else {
    // 새 사용자 생성
    await createUser(userData);
  }
}

// 사용자 수정 폼 설정 함수
function editUser(user) {
  userIdInput.value = user.id;
  nameInput.value = user.name;
  emailInput.value = user.email;
  phoneInput.value = user.phone || "";

  submitBtn.textContent = "수정";

  // 취소 버튼이 아직 없으면 추가
  if (!document.querySelector(".cancel-btn")) {
    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "cancel-btn";
    cancelBtn.textContent = "취소";
    cancelBtn.addEventListener("click", resetForm);

    // 폼에 취소 버튼 추가
    userForm.appendChild(cancelBtn);
  }
}

// 초기화 함수
function init() {
  // 이벤트 리스너 등록
  userForm.addEventListener("submit", handleFormSubmit);

  // 사용자 목록 로드
  fetchUsers();
}

// 애플리케이션 초기화
init();
