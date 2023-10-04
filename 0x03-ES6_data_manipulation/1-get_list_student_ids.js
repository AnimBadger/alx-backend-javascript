export default function getListStudentIds(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  const mappedArrayOfStudents = studentsArray.map((obj) => obj.id);
  return mappedArrayOfStudents;
}
