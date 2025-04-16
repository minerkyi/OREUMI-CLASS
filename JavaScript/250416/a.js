// 수학 기능을 하는 함수
export function sum(a, b) {
  return a + b;
}

export const PI = 3.141592;

// 기본 내보내기는 모듈 당 1개만 가능
export default function sub(a, b) {
  return a - b;
}

let user = {
  name: '라이캣',
  location: {
    country: '대한민국',
    city: '제주'
  },
  age: 20
};
Object.defineProperty(user, 'password', {
  value:'#0000',
  writable: false,
  enumerable: false,
  configurable: false
});
console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.freeze(user);
export {user};