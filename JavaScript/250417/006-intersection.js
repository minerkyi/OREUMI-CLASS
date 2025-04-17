// IntersectionObserver
const callback = ((entries, observer) => {
  entries.forEach(entry => {
    console.log(entry);
    if(entry.isIntersecting) {
      console.log('요소가 들어왔습니다!');
    } else {
      console.log('요소가 나갔습니다!');
    }
  });
}) ;

const options = {
  root: null, // 기본값 null 뷰포트
  rootMargin: '0px',
  threshold: [0.0, 0.5, 1.0]
};

const observer = new IntersectionObserver(callback, options);
const target = document.getElementById('target');
observer.observe(target);