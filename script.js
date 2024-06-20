const Btn = document.getElementById("btn");
const ullist = document.querySelector(".ulls");

const STORE = JSON.parse(localStorage.getItem("ListItem")) || [];
STORE.forEach((licontent) => {
  const li = creatListItem(licontent);
  ullist.appendChild(li);
});
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
  localStorage.setItem("NAME", JSON.stringify(li.innerHTML));
  li.appendChild(button);

  STORE.push(li);
  localStorage.setItem("listitems", JSON.stringify(STORE));

  button.addEventListener("click", () => {
    const index = STORE.indexOf(li);
    if (index > -1) {
      STORE.splice(index, 1);
      ullist.removeChild(li);
    }
  });
  // localStorage.setItem("listitems", JSON.stringify(STORE));

  console.log(STORE);

  ullist.appendChild(li);
});
