async function loadPage() {
  try {
    const response = await fetch("https://www.naver.com");

    if (!response.ok) {
      throw new Error("HTTP 응답 실패");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("오류 발생:", error);
  }
}
loadPage();

// has been blocked by CORS policy

// 오류 발생 이유: 브라우저가 동일 출처 정책(SOP, Same Origin Policy)
// SOP: 동일한 프로토콜(http, https), 도메인(www.naver.com), 포트(:80, :5500)가 동일한 경우에만 리소스에 접근이 가능하도록 제한

// CORS(Cross Origin Resource Sharing), 교차 출처 리소스 공유
// - 다른 출처(다른 프로토콜, 다른 도메인, 다른 포트) 간에 리소스를 사용
// - 어떤 요청을 허가할 것인지, 어디서 들어오는 요청을 허가

// Access-Control-Allow-Origin 헤더를 설정 -> 요청 허가
// ['GET', 'POST']
// *, localhost:3000

// 사전 요청(preflight) -> 실패하면 요청 X / 성공하면 요청 O
