function calculateGpa(grades) {
  var totalPoints = 0;
  var gradePoints = {'A': 4, 'B': 3, 'C': 2, 'D': 1, 'F': 0};
  grades.forEach(function(grade) {
    totalPoints += gradePoints[grade];
  });
  var gpa = totalPoints / grades.length;
  return gpa;
}
