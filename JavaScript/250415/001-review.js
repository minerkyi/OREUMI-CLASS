// AJAX
// Fetch API
// Async/Await

// Fetch API
// fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/blog")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// async await
async function getBlog() {
  const response = await fetch(
    "https://dev.wenivops.co.kr/services/fastapi-crud/1/blog"
  );

  if (!response.ok) {
    throw new Error("오류 발생");
  }

  return response.json();
}
async function main() {
  // 오류 처리 try-catch
  try {
    const blogs = await getBlog();
    console.log(blogs);
  } catch (error) {
    console.error("오류발생:", error);
  }
}
main();
