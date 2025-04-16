// 엄격모드 strict mode

// 전역과 함수 범위로 사용이 가능
// 'use strict';

// 1. 변수 선언 생략
function func1() {
  'use strict';
  let x;
  x = 10;
  console.log(x);
}
func1();

// 2. 삭제 불가능한 속성 삭제
function func2() {
  'use strict';
  // delete Object.prototype; // (기존)오류 없이 동작 무시
  console.log(Object.prototype);
}
func2();

// 3. 매개변수의 중복 사용
// function sum(a, a) {
//   console.log(a);
// }
// sum(2, 4);

// 4. 일반 함수 this
function func3() {
  'use strict';
  console.log(this);
}
func3();