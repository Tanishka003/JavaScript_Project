const studentId = 192304608; //data
let studentName = "Dora"
let studentEmail = "info@dora.com"
let studentCourse ="BCA"
let studentCity; // get undefined bcoz data is not given

console.log("Student Details"); // head of table

console.table([studentId, studentName, studentEmail, studentCourse, studentCity]); //  data will print in table from