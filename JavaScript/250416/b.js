// 해당 기능을 가져와서 정보를 출력
// import minus, {sum as plus, PI} from './a.js';
import {user} from './a.js';

// console.log(plus(10, 20));
// console.log(PI);
// console.log(minus(20, 10));

// 버튼이 눌렸을 때 모듈을 호출
const moduleBtn = document.getElementById('module-btn');
moduleBtn.addEventListener('click', async () => {
  const {PI, sum, default: minus} = await import('./a.js');
  console.log('module', PI);
  console.log('module', sum);
  console.log('module', minus);
});

// 외부 import한 값은 재할당X
console.log(user);
// user = {user: '위니브'};

// user.name = '위니브';
console.log(user);
// user.password = 'hello';
