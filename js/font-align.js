// font align
document.getElementById("text-left").addEventListener("click", function(){
    handleFormat("text");
    text.style.textAlign = "left"
})

document.getElementById("text-center").addEventListener("click", function(){
    handleFormat("text");
    text.style.textAlign = "center"
})

document.getElementById("text-right").addEventListener("click", function(){
    handleFormat("text");
    text.style.textAlign = "right"
})

document.getElementById("text-justify").addEventListener("click", function(){
    handleFormat("text");
    text.style.textAlign = "justify"
})