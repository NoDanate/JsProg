function sumNumbers(){
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);

    const sum = a + b;

    if(isNaN(sum)){
        document.getElementById("result").innerText = "Error/ Enter NUMBERS";
    }
    else {
        document.getElementById("result").innerText = `Sum: ${sum}`;
    }
}