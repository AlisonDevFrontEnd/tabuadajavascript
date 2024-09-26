function multiplicationTable() {
  const resultDiv = document.getElementById("result");
  for (let i = 2; i <= 9; i++) {
    const container = document.createElement("div");
    container.classList.add("tabuada");
    const title = document.createElement("h3");
    title.innerText = `Tabuada do ${i}:`;
    container.appendChild(title);
    for (let j = 1; j <= 10; j++) {
      const paragraph = document.createElement("p");
      paragraph.innerText = `${i} x ${j} = ${i * j}`;
      container.appendChild(paragraph);
    }
    resultDiv.appendChild(container);
  }
}
multiplicationTable();