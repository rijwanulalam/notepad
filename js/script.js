function handleFormat(textId) {
  const textField = document.getElementById(textId);
  const text = textField.value;
  if (textField.value == "") {
    alert("please write something");
  }
  return text;
}
// set color
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
//   let p = text;
//   if (p) {
    text.style.color = event.target.value;
//   }
}
function updateAll(event) {
//   document.querySelector("text").forEach(function (text) {
    text.style.color = event.target.value;
//   });
}
