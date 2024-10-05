const resultMain = document.querySelector(".container");

for (let i = 2; i <= 9; i++) {
  const containerSection = document.createElement("section");
  containerSection.classList.add("multiplication-table");
  const title = document.createElement("h3");
  title.innerText = `Tabuada do ${i}:`;
  containerSection.appendChild(title);
  
  for (let j = 1; j <= 10; j++) {
    const paragraph = document.createElement("p");
    paragraph.innerText = `${i} x ${j} = ${i * j}`;
    containerSection.appendChild(paragraph);
  }
  resultMain.appendChild(containerSection);
}