let now = new Date();
let birthday = new Date(2002, 10, 18);

alert(now.getFullYear());
alert(birthday.getDate());

alert((now.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24));

now.toISOString(); 

now.toLocaleDateString();
now.toLocaleString();