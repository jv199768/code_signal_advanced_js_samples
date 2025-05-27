class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayStudentInfo() {
    console.log("Student Name: " + this.name);
    console.log("Student Age: " + this.age);
    console.log("Student Grade: " + this.grade);
  }

  updateStudentGrade(newGrade) {
    this.grade = newGrade;
  }
}
