let group1 = ['Kataev', 'Peshkov', 'Maliver', 'Ermolin', 'Polovnikov']
let group2 = ['Brook', 'Nico', 'Moomin']

let students = group1.splice(2,2);

//alert(students);

group2 = group2.concat(students);
//alert(group1);
//(group2);

let ilia = {
    firstName: "Ilia",
    lastName: "Kataev",
    birthday: "18/10/2002",
    showInfo(){
        alert('Student name: ' + this.firstName + this.lastName);
    },

    showAge(){
        const fullTime = Date.now() - Date.parse(this.birthday);
        const studAge = Math.floor(fullTime/(365*24*60*60*1000));
        alert(this.firstName + ' ' + this.lastName + ': ' + studAge);
        console.log(this.firstName + ' ' + this.lastName + ': ' + studAge);
    },
}

let sveta = {
    firstName: "Sveta",
    lastName: "Erbes",
    birthday: "18/10/2002",
    showInfo(){
        alert('Student name: ' + this.firstName + this.lastName);
    },

    showAge(){
        const fullTime = Date.now() - Date.parse(this.birthday);
        const studAge = Math.floor(fullTime/(365*24*60*60*1000));
        alert(this.firstName + ' ' + this.lastName + ': ' + studAge);
    },
}

//console.log(ilia);
//ilia.showInfo();
//ilia.showAge();
//console.log(sveta);
//sveta.showInfo();
//sveta.showAge();

function Student(firstName, lastName, birthday){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;

    Student.prototype.showInfo = function(){
        alert('Student name: ' + this.firstName + this.lastName);
    }

    this.showAge = function(){
            const fullTime = Date.now() - Date.parse(this.birthday);
            const studAge = Math.floor(fullTime/(365*24*60*60*1000));
            alert(this.firstName + ' ' + this.lastName + ': ' + studAge);
    }
}

let spiderMan = new Student('Peter', 'Parker', '11/23/1984');

//spiderMan.showInfo();
//spiderMan.showAge();
//console.log(spiderMan);
//alert(spiderMan);

class Human {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    };

    showInfo(){
        alert(this.firstName + this.lastName);
    };

    showAge(){
        const fullTime = Date.now() - Date.parse(this.birthday);
        const studAge = Math.floor(fullTime/(365*24*60*60*1000));
        alert(this.firstName + ' ' + this.lastName + ': ' + studAge);
    };

    toString(){
        return this.firstName +' ' + this.lastName + ' ' + this.constructor.name;
    }
}

const josh = new Human('Oliver', 'Rodriguez', '12-12-1992');
josh.showInfo();
josh.showAge();
console.log(josh);

console.log(josh.birthday, josh.firstName)

class Teacher extends Human{
    constructor(firstName, lastName, birthday, subjects = []){
        super(firstName, lastName, birthday); 
        this.subjects = subjects;
    }

    showSubjects(){
        alert(` ${this.firstName, this.lastName} может преподавать ${this.subjects.join(', ')}`);
    }

    showInfo(){
        alert(this.firstName + this.lastName + ': ' + this.subjects.join(', '));
        document.writeln('<p> Преподаватель' + this.lastName + 'может вести<p><ol><li>'+ this.subjects.join('<li>') + '</ol>')
    }
}

const oda = new Teacher("Oda", "Eichiro", "01/01/1975", ['Черчение', 'ИЗО', 'Литература']);

oda.showInfo();
oda.showAge();
oda.showSubjects();

josh.showInfo();

console.log(oda);

document.writeln('Class Human: ' + josh + '<br>');
document.writeln('Class Teacher:' + oda + '<br>');

console.log(josh instanceof Object);
console.log(josh instanceof Teacher);
console.log(oda instanceof Human);
console.log(oda instanceof Teacher);

odaJSON = JSON.stringify(oda);

console.log(odaJSON);


class StringIfo extends String{
    calcLetter(letter){
        let count = 0;
        let index = this.indexOf(letter);
        while(index != -1){
            count++;
            index = this.indexOf(letter, index+1);
        }
        return count;
    }
}

let str = new StringIfo("Hold me in your heart tonight" +
" In the magic of the dark moonlight");

console.log('g в ' + str + ' = ' + str.calcLetter('g'));
console.log('tonight в ' + str + ' = ' + str.calcLetter('tonight'));
console.log('[ ] в ' + str + ' = ' + str.calcLetter(' '));
console.log('123 в ' + str + ' = ' + str.calcLetter('123'));

let usualString = "Hold me in your heart tonight" +
" In the magic of the dark moonlight";

console.log('123 в ' + usualString + ' = ' + usualString.calcLetter('123'));