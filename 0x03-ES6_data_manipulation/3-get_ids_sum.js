const getStudentIdsSum = (listOfStudents) => {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  const totalIDs = listOfStudents.reduce((previous, current) => previous + current.id, 0);
  return totalIDs;
};
export default getStudentIdsSum;
