let group1 = ['Kataev', 'Peshkov', 'Maliver', 'Ermolin', 'Stolbov', 'Polovnikov'];
let group2 = ['Brook', 'Niko', 'Moomin'];

let students = group1.splice(2, 2);

alert(students);

group2 = group2.concat(students);
alert(group1);
alert(group2);

let ilia = {
    firstName: "Ilia",
    lastName: "Kataev",
    birthday: "18.10.2002",
    showInfo(){
        alert('Student name: ' + this.firstName + " " + this.lastName);
    },

    showAge(){
        const fullTime = Date.now() - Date.parse(this.birthday)
    }
}