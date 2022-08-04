class Patient {
  constructor(data) {
    this.fullData = data;
  }
}
document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    const arr = [];
    takeInput(arr);
    const patients = new Patient(arr.sort());
    toList(patients.fullData);
    clearInput();
  }
});
const toList = (output) => {
  const node = document.createElement("li");
  node.appendChild(document.createTextNode(`${output}`));
  document.querySelector("ul").appendChild(node);
};
const clearInput = () => {
  document.querySelector("input").value = "";
};
const takeInput = (arr) => {
  for (i = 0, k = 0; i < 3; i++) {
    arr.push(
      Array.from(document.querySelector("input").value)
        .join("")
        .split(/(?:, |;)+/)
        .splice(0 + k, 3)
    );
    k += 3;
  }
  return arr;
};
