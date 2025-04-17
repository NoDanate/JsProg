/*
button.addEventListener("click", function(){
    alert(12312);
})
    */
document.addEventListener("mousemove", function(){

})

document.onmousemove = function(e){
    coordX.innerHTML = e.pageX;
    coordY.innerHTML = e.pageY;
}

document.onmousedown = function(e){
    if(e.which==2){
        coordX.style["font-size"] = coordY.style["font-size"] = "x-large";
    }
}

document.oncontextmenu = function(e){
    e.preventDefault();
}


document.onmouseup = function(){
    coordX.style["font-size"] = coordY.style["font-size"] = "medium";
}