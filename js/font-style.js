// font style button
document.getElementById("font-bold").addEventListener("click", function(){
    handleFormat("text");
    text.style.fontWeight = "bold";
})

document.getElementById("font-italic").addEventListener("click", function(){
    handleFormat("text");
    text.style.fontStyle = "italic";
})

document.getElementById("font-underline").addEventListener("click", function(){
    handleFormat("text");
    text.style.textDecoration = "underline";
})