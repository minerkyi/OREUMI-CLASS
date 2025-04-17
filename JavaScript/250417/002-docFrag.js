// 1부터 100까지 <li>Item {n}</li>
const itemList = document.getElementById('item-list');

const docFrag = document.createDocumentFragment();
for(let i = 1; i <= 100; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  docFrag.appendChild(li);
}
itemList.appendChild(docFrag); // 한 번만 DOM 업데이트