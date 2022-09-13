let firstName = "Vin";
let lastName = "Diesel";
let age = 50;
let job = { title: "Mechanic", salary: 50000 };
let hobbies = ["Instrument", "Cars", "Sports"];

let fullname;
function addedname() {
  fullname = firstName + " " + lastName;
}

alert("What is your name?");

addedname();
alert(fullname);

alert("How old are you?");

alert(age);
alert("What is your job?");
alert(job.title);
alert("How much is your salary?");
alert(job.salary);
alert("What are your hobbies?");
alert(hobbies[0]);
alert(hobbies[1]);
alert(hobbies[2]);

let workDuration;
function workingSince() {
  workDuration = age - 18;
}

alert("How long have you've been working?");
workingSince();
alert(`${workDuration} years`);
