function handleFormat(textId) {
  const textField = document.getElementById(textId);
  const text = textField.value;
  if (textField.value == "") {
    alert("please write something");
  }
  return text;
}

var colors;
var defaultColor = "#0000";
window.addEventListener("load", startup, false);
function startup() {
  colors = document.querySelector("#colors");
  colors.value = defaultColor;
  colors.addEventListener("input", updateFirst, false);
  colors.addEventListener("change", false);
  colors.select();
}
function updateFirst(event) {
//   var p = text;
  if (text) {
    text.style.color = event.target.value;
  }
}
// function updateAll(event) {
//   document.querySelectorAll("p").forEach(function (text) {
//     p.style.color = event.target.value;
//   });
// }
