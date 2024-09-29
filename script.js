const resultDiv = document.querySelector('.result');
for (let i = 2; i <= 9; i++) {
  const container = document.createElement('div');
  container.classList.add('multiplication-table');
  const title = document.createElement('h3');
  title.innerText = `Tabuada do ${i}:`;
  container.appendChild(title);
  for (let j = 1; j <= 10; j++) {
    const p = document.createElement('p');
    p.innerText = `${i} x ${j} = ${i * j}`;
    container.appendChild(p);
  }
  resultDiv.appendChild(container);
}