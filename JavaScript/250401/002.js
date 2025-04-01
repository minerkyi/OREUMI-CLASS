console.log('Hello, World!');
console.log('1. 로그인 성공');

// 여러 개의 값
console.log(1, 2, 3, 4, 5);

// 다양한 형식
console.log('안녕하세요');
console.error('오류 발생');
console.warn('경고 발생');
console.info('정보 메시지');

// 표 형식
console.table({
    name: '김현',
    country: '대한민국',
    city: '제주',
});

// 그룹화
console.group('개인 정보');
console.log('이름: 김현');
console.log('국가: 대한민국');
console.log('도시: 제주');
console.groupEnd();

// 시간
console.time('타이머 시작');
for (let i = 0; i < 1000000; i++) {
    // 반복문
}
console.timeEnd('타이머 시작');

// 초기화
// console.clear();