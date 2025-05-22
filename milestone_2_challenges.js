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

//challenge 4 Longest word

function findLongestWord(wordlist) {
  let longestWord = wordlist[0];

  for (i in wordlist) {
    if (wordlist[i].length > longestWord.length) longestWord = wordlist[i];
  }
  return longestWord;
}

// challenge 5  count properties

const countProperties = (object) => Object.keys(object).length;

//challenge 6 Filter by length

function filterByLength(wordlist, num) {
  let newWordlist = [];
  for (i in wordlist) {
    if (wordlist[i].length >= num) newWordlist.push(wordlist[i]);
  }
  return newWordlist;
}
