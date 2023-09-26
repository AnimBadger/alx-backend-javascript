export default function appendToEachArrayValue(array, appendString) {
  const finalArray = [];
  for (const element of array) {
    finalArray.push(`${appendString}${element}`);
  }

  return finalArray;
}
