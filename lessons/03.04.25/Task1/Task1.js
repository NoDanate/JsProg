let number = prompt("Enter number", 0);

if(number == null || number.trim() === ""){
    alert("No number")
}
else{
    if(isNaN(number)){
        alert("Is not a number!");
    }
    else if (number > 0) {
        alert("положительное");
    }
    else if (number == 0){
        alert("Zero");
    }
    else if (number < 0){
        alert("отрицательное");
    }
}