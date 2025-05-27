var student_name = "Alice";
var student_age = 20;
var student_grade = 3.9;

function displayStudentInfo() {
  console.log("Student Name: " + student_name);
  console.log("Student Age: " + student_age);
  console.log("Student Grade: " + student_grade);
}

function updateStudentGrade(new_grade) {
  student_grade = new_grade;
}
