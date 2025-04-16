export let userState = false; // false면 활성화X, true 활성화

export function changeUserState(newState) {
  userState = newState;
  return userState;
}