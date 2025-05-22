//challenge 1: sum of positive

function sumOfpositive(array) {
  let sum = 0;
  for (k in array) {
    if (array[k] >= 0) {
      sum += array[k];
    }
  }
  return sum;
}

//challenge 2 find max value

function findMax(array) {
  let max = array[0];
  for (k in array) {
    if (array[k] > max) max = array[k];
  }
  return max;
}

//challenge 3 Election winner
function findWinner(candidates) {
  let winner = candidates[0];
  for (k in candidates) {
    if (candidates[k].votes > winner.votes) winner = candidates[k];
  }
  return winner;
}
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charile", votes: 65 },
];
console.log(findWinner(candidates));
