const testListA = ['a', 'b', 'c'];
const testListB = [1, 2, 3];


function zipList(listA, listB) {
  const outputList = [];
  for (let i = 0; i < listA.length; i++) {
    outputList.push(listA[i]);
    outputList.push(listB[i]);
  }
  return outputList;
}

console.log(zipList(testListA, testListB));


function zipListTheEasyWay(listA, listB) {
  const zippedList = _.zip(listA, listB);
  return _.flatten(zippedList);

}
console.log(zipListTheEasyWay(testListA, testListB));
