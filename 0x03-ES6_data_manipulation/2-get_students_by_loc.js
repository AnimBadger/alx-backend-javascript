export default function getStudentsByLocation(listOfStudents, city) {
  if (!Array.isArray(listOfStudents) && typeof city !== 'string') {
    return [];
  }
  const SanFranciscoStudents = listOfStudents.filter((obj) => obj.location === city);
  return SanFranciscoStudents;
}
