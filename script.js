const Btn = document.getElementById("btn");
const ullist = document.querySelector(".ulls");

const STORE = [];
ullist.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("thru");
  }
});

Btn.addEventListener("click", () => {
  const inpuT = document.querySelector(".inputtext").value;
  const li = document.createElement("li");
  li.classList.add("listt");
  const button = document.createElement("button");
  button.classList.add("btnclass");
  button.textContent = "X";
  li.innerHTML = `<span>${inpuT}</span>`;
  li.appendChild(button);

  STORE.push(li);

  button.addEventListener("click", () => {
    const index = STORE.indexOf(li);
    if (index > -1) {
      STORE.splice(index, 1);
      ullist.removeChild(li);
    }
  });

  console.log(STORE);
  ullist.appendChild(li);
});
