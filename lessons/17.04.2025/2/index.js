div1.addEventListener("click", function(e){
    console.log('click on div1');
    e.stopPropagation();
})

div2.addEventListener("click", function(){
    console.log('click on div2')
})

document.addEventListener("click", function(){
    console.log('click on document')
})