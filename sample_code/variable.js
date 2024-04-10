const studentId = 192304608; //data
let studentName = "Dora"
let studentEmail = "info@dora.com"
let studentCourse ="BCA"
let studentCity; // get undefined bcoz data is not given

console.log("Student Details"); // head of table

console.table([studentId, studentName, studentEmail, studentCourse, studentCity]); //  data will print in table from



var person = "frozen" 
console.log(person);
// var create a block  scope issue and known which assign value want to change it replace all value of same name of variable

let username = "rita"
let password = 12345

console.log("LOGIN");
console.table(`Username = ${username}\nPassword = ${password}`);
