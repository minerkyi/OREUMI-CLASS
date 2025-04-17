// mutationObserver
const target = document.getElementById('target');

const config = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true
};

const callback = function(mutationsList, observer) {
  for(const mutation of mutationsList) {
    console.log(mutation);
    console.log(mutation.type);
  }
};

const observer = new MutationObserver(callback);
observer.observe(target, config);

for(let i=0; i<10; i++) {
  const li = document.createElement('li');
  li.innerHTML = `item ${i}`;
  target.appendChild(li);
}

target.classList.add('target');

// observer.disconnect();
