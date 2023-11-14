function handleFormat(textId) {
  const textField = document.getElementById(textId);
  const text = textField.value;
  if (textField.value == "") {
    alert("please write something");
  }
  return text;
}

let colors;
let defaultColor = "#0000";
window.addEventListener("load", startup, false);
function startup() {
  colors = document.querySelector("#colors");
//   colors.value = defaultColor;
  colors.addEventListener("input", updateFirst, false);
  colors.addEventListener("change", updateAll, false);
  colors.select();
}
function updateFirst(event) {
  var p = text;
  if (p) {
    p.style.color = event.target.value;
  }
}
function updateAll(event) {
  document.querySelectorAll("p").forEach(function (text) {
    p.style.color = event.target.value;
  });
}
