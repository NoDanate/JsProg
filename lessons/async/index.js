let request = new XMLHttpRequest;

/*(request.responseType = "text";
request.open("GET", "person.xml");

request.onreadystatechange = function(){
    console.log("readystate = " + request.readyState);

    if(request.readyState === 4 && request.status == 200){
        let person = request.response;
        console.log(person);
        console.log(request.responseXML);
    }
}*/

/*request.open("GET", "text.json");
request.onload = function(){
    if(request.status === 200){
        alert(request.response);
    }
}*/

request.open("GET", "text.json");
request.onloadend = function(event){
    alert(`Загружено ${event.loaded}`)
}

request.onerror = function(){
    alert("Error");
}

request.onload = function(){
    if(request.status === 404){
        alert(request.response);
    }
}

request.send();