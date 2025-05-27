class Student {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
    this.gpa = this.calculateGpa();
  }

  calculateGpa() {
    var totalPoints = 0;
    var gradePoints = {'A': 4, 'B': 3, 'C': 2, 'D': 1, 'F': 0};
    this.grades.forEach((grade) => {
      totalPoints += gradePoints[grade];
    });
    return totalPoints / this.grades.length;
  }
}
