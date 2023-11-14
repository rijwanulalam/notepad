// font style button
document.getElementById("font-bold").addEventListener("click", function(){
    handleFormat("text");
    if(text.style.fontWeight === "bold"){
        text.style.fontWeight = "normal";
    }
    else{
        text.style.fontWeight = "bold";
    }
})

document.getElementById("font-italic").addEventListener("click", function(){
    handleFormat("text");

    if(text.style.fontStyle === "italic"){
        text.style.fontStyle = "normal";
    }
    else{
        text.style.fontStyle = "italic";
    }
})

document.getElementById("font-underline").addEventListener("click", function(){
    handleFormat("text");
    if(text.style.textDecoration === "underline"){
        text.style.textDecoration = "none";
    }
    else{
        text.style.textDecoration = "underline";
    }
})