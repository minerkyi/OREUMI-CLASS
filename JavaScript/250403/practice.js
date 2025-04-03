const users = [
    {
        _id: "00a1a486-5619-4d93-Ae5e-a87cac8467f2",
        index: "1",
        name: "봉태하",
        email: "user-7lcoy7h@Fusce.com",
        phone: "010-2124-1659",
        country: "벨기에",
        address: "노량진로 64-3",
        job: "시각디자이너",
        age: "22",
    },
    {
        _id: "5244a531-147e-42e4-Cc2c-49526d4131f5",
        index: "2",
        name: "유이현",
        email: "user-mbq430b@Dolor.org",
        phone: "010-9533-7747",
        country: "모잠비크",
        address: "잠실로 82-7",
        job: "자연계중등학교교사",
        age: "43",
    },
    {
        _id: "b0462846-4a06-4189-C81d-192fa6e61bba",
        index: "3",
        name: "하채빈",
        email: "user-q61zv39@dictumst.org",
        phone: "010-4798-1046",
        country: "도미니카",
        address: "양재로 6-5",
        job: "화학공학기술자",
        age: "22",
    },
    {
        _id: "1b5f9b0e-4ee8-48f5-B5b8-faf31d262e1f",
        index: "4",
        name: "권수환",
        email: "user-fkbq6xc@vehicula.com",
        phone: "010-2141-4029",
        country: "적도 기니",
        address: "사당로 20-7",
        job: "호텔지배인",
        age: "43",
    },
    {
        _id: "6dec6c68-3c3c-43eb-Ab60-7dc4d87b7e31",
        index: "5",
        name: "빈준형",
        email: "user-bl00rs7@no.net",
        phone: "010-9378-7348",
        country: "바레인",
        address: "서소문로 43-7",
        job: "로봇연구원",
        age: "29",
    },
    {
        _id: "67c4fcfa-360e-424a-Ad37-a433a344e7d8",
        index: "6",
        name: "화규린",
        email: "user-brcjv7x@pellentesque.com",
        phone: "010-7966-9924",
        country: "호주",
        address: "노량진로 10-3",
        job: "패션디자이너",
        age: "33",
    },
    {
        _id: "5b2d104c-2b64-43f7-C8dc-e8f17dc69f68",
        index: "7",
        name: "천해원",
        email: "user-4719myb@Diam.co.kr",
        phone: "010-7002-8824",
        country: "가이아나",
        address: "용산로 80-6",
        job: "통역가",
        age: "17",
    },
    {
        _id: "208cd0c2-ef75-46bd-B967-13aaacf18501",
        index: "8",
        name: "총정환",
        email: "user-k4u1x6z@Cum.net",
        phone: "010-7763-4185",
        country: "말라위",
        address: "마포대로 62-5",
        job: "음악치료사",
        age: "34",
    },
];

// 1. [index, name, age] 배열을 요소를 갖는 새로운 배열을 생성
// 2. age 20살 이상인 사람들의 이름만을 추출
const newUsers = users.map((el) => {
    return [el.index, el.name, el.age];
});
console.log(newUsers);

const names = users.filter((el) => el.age >= 20).map((el) => el.name);
console.log(names);

// 3. (더 해보기) id가 1b5f9b0e-4ee8-48f5-B5b8-faf31d262e1f 인 사람의 이름 출력하기
// 4. (더 해보기) 사용자의 평균 나이 구하기
const name = users.find((el) => el._id === '1b5f9b0e-4ee8-48f5-B5b8-faf31d262e1f').name;
console.log(name);

const ageAvg = users.map((el) => parseInt(el.age)).reduce((acc, cur) => acc + cur) / users.length;
console.log(Math.round(ageAvg));

{
    // 풀이
    // 1. 순회 + 새로운 배열 = forEach / map
    const newUsers = users.map((el) => [el.index, el.name, el.age]);
    console.log(newUsers);

    // 2.
    const overTwenty = users.filter((el) => el.age >= 20).map((el) => el.name);
    console.log(overTwenty);

    // 3.
    const targetUser = users.find(
        (el) => el._id === '1b5f9b0e-4ee8-48f5-B5b8-faf31d262e1f'
    );
    console.log(targetUser.name);

    // 4. 평균 = 전체 합 / 길이
    const sum = users.map((el) => parseInt(el.age)).reduce((acc, cur) => acc + cur, 0);
    console.log('평균나이:', sum / users.length);
}