// async / await
// - ES8(ES2017)에서 도입된 문법
// - 비동기 코드를 동기적으로 동작하는 코드처럼 작성

async function message() {
  const result1 = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello');
    }, 1000);
  });

  const result2 = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('World');
    }, 2000);
  });

  console.log(result1);
  console.log(result2);
}
// message();

// 상품 가져오기
async function getProducts() {
  const response = await fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/product');
  console.log(response);
  if(!response.ok) {
    throw new Error('네트워크 응답이 실패했습니다.');
  }

  const data = await response.json();
  console.log('data', data);
  return data;
}

async function main() {
  // try-catch
  try {
    const product = await getProducts();
    console.log(product);
  } catch(error) {
    console.error(error);
  }
}

// 삭제 요청
async function deleteProduct(id) {
  const response = await fetch(`https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`, {
    method: 'DELETE'
  });
  console.log(response);
  if(!response.ok) {
    throw new Error('네트워크 통신을 실패하였습니다.')
  }
  const data = await(response.json());
  console.log(data);
}

async function main(id) {
  try {
    await deleteProduct(id);
    await getProducts();
  } catch(error) {
    console.error(error);
  }
}
main(4);