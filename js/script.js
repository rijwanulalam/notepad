function handleFormat(textId) {
  const textField = document.getElementById(textId);
  const text = textField.value;
  if (textField.value == "") {
    alert("please write something");
  }
  return text;
}

