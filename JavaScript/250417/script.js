// 메모리 생명주기
// 메모리 할당
const user = {
  name: '위니브'
};

function func1() {
  const a = 10;
  console.log(a);
}
func1();

// 메모리 누수
// 가비지 컬렉터(Garbage Collector): 자동으로 메모리를 관리

// 참조 카운팅
const a = {name: '위니브'};
b = a;

function func2() {
  const x = {};
  const y = {};
  x.obj = y;
  y.obj = x;
}
func2();

// 마크앤 스위프트