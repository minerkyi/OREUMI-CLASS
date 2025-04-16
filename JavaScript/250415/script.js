// 날짜 객체
const now = new Date();
console.log(now); // 현재 날짜

// 특정
// 날짜 객체에서 월은 0 -> 1월, 1 -> 2월, 2 -> 3월, 3 -> 4월...
const date1 = new Date(2025, 3, 16, 13, 25);
console.log(date1);

const date2 = new Date('2025-03-10');
console.log(date2);

// 정보 가져오기
const today = new Date();
const year = today.getFullYear();
console.log(year); // 2025

const month = today.getMonth() + 1;
console.log(month);

const date = today.getDate();
console.log(date);

const day = today.getDay();
const weekdays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
console.log(day);
// 0: 월요일, 1:월요일, 2:화요일, ..., 6:토요일

// 시간 정보
const hours = today.getHours();
console.log(hours);
const minutes = today.getMinutes();
console.log(minutes);
const seconds = today.getSeconds();
console.log(seconds);
const milliseconds = today.getMilliseconds();
console.log(milliseconds);

// 1970년 1월 1일을 기준으로 밀리초를 계산
const timestamp = new Date().getTime();
console.log(timestamp);

const dateFromStamp = new Date(timestamp);
console.log(dateFromStamp);

// 날짜를 계산
const dateEnd = new Date('2025-07-10');
const dateStart = new Date();

console.log(dateEnd - dateStart);
console.log(Math.ceil((dateEnd - dateStart) / (24 * 60 * 60 * 1000)));
// 1일 = 24*60*60*1000

// 포맷팅
console.log(dateStart.toString());
console.log(dateStart.toDateString()); // 날짜
console.log(dateStart.toTimeString()); // 시간
console.log(dateStart.toISOString());

// 지역코드
// - 지역코드를 인자로 전달하면 해당 지역
// - 지역코드가 없으면 컴퓨터의 로컬 지역
console.log(dateStart.toLocaleDateString()); // yyyy. mm. dd.
console.log(dateStart.toLocaleDateString('en-US')); // mm/dd/yyyy
console.log(dateStart.toLocaleDateString('ja-JP')); // yyyy/mm/dd

console.log(dateStart.toLocaleTimeString());
console.log(dateStart.toLocaleTimeString('en-US')); // hh:mm:dd AM/PM
console.log(dateStart.toLocaleTimeString('ja-JP')); // 24시간제

console.log(dateStart.toLocaleString());
console.log(dateStart.toLocaleString('en-US'));
console.log(dateStart.toLocaleString('ja-JP'));

// [실습]
function formatDate(dateObj) {
  // 날짜 객체 -> yyyy년 mm월 dd일 요일, hh시 mm분

  const year = dateObj.getFullYear();
  // const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  let month = dateObj.getMonth() + 1;
  if(month < 10) {
    month = '0' + month; // 문자열 연결, month가 문자열로 자동 형변환
  }

  const date = String(dateObj.getDate()).padStart(2, '0');

  const weekdays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const day = weekdays[dateObj.getDay()];

  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');

  return `${year}년 ${month}월 ${date}일 ${day}, ${hours}시 ${minutes}분`;
}
const dayFormatted1 = formatDate(now);
console.log('>>', dayFormatted1);``