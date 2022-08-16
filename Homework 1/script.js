class Patient {
  constructor(data) {
    this.fullData = data;
  }
}
document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    const arr = document.querySelector("input").value.split(";");
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
