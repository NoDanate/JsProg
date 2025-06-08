/*let Dave = {
    name: "Dave"
}

let Kate = {
    name: "Kate"
}

Kate.parent = Dave;
Dave.child = Kate;

JSON.stringify(person, null, 2)

let family = JSON.stringify(Dave);
console.log(family);*/

/*let person = {
    name: "Ilia",
    surname: "Kataev",
    age: "22",
    isStudent: true,
    contactInfo:{
        phone: "88005553535",
        email: "qwerty@gmail.com",
    },
    disciplines: ["PIS", "OT", "KIS", "SBA"]
}

function checkAge(key, value){
    if(key === "age" && value >= 18){
        return undefined;
    }
    return value;
}

//let meJSON = JSON.stringify(person, checkAge);
let meJSON = JSON.stringify(person, ["name", "surname"], 2);
alert(meJSON);

JSON.parse();*/

/*let model = {
    name: "BMW",
    autopilot: undefined,
    toJSON(){
        let jsonStr = '{name: ${this.name}, autopilot: ';
        if(this.autopilot === undefined) {
            jsonStr += 'Not}'
        }
        else{
            jsonStr += '${this.autopilot}}'
        }
        return jsonStr;
    }
}

let car = {
    color: "black",
    date: new Date(2019, 7, 21),
    model
}

let carmodel = JSON.stringify(car, null, 2);
alert(carmodel);*/

let user = {
    name: "Василий Иванович",
    age: 35
  };
  
  let user2 = JSON.parse(JSON.stringify(user));

  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));