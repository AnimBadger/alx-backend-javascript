const updateStudentGradeByCity = (studentsList, city, grades) => {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  const cityStudent = studentsList.filter((student) => student.location === city).map((student) => {
    const studentGrade = grades.find((student2) => student.id === student2.studentId);
    return { ...student, grade: studentGrade ? studentGrade.grade : 'N/A' };
  });
  return cityStudent;
};

export default updateStudentGradeByCity;
