let fontSize = 16;
document.getElementById("decrease").addEventListener("click", function(){
    handleFormat("text");
    fontSize = fontSize - 1;
    text.style.fontSize = fontSize + "px";
})

document.getElementById("increase").addEventListener("click", function(){
    handleFormat("text");
    fontSize = fontSize + 1;
    text.style.fontSize = fontSize + "px";
})