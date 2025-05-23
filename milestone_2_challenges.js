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

//challenge 7 sum of Even numbers

function sumEvenNumber(array) {
  let sum = 0;
  for (i in array) {
    if (array[i] % 2 == 0) sum += array[i];
  }
  return sum;
}
// challenge 8  Difference Between sum of even and Odd numbers

function differenceEvenOdd(numarray) {
  let sumeven = 0,
    sumOdd = 0;
  for (i in numarray)
    numarray[i] % 2 == 0 ? (sumeven += numarray[i]) : (sumOdd += numarray[i]);
  return sumeven - sumOdd;
}

// challenge 9 count Truthy

function countTruthy(object) {
  let count = 0;
  for (key in object) if (object[key]) count++;
  return count;
}

// challenge 10 Average of numbers

function average(numarray) {
  if (numarray.length === 0) return 0;
  let sum = 0;
  for (k in numarray) sum += numarray[k];
  return sum / numarray.length;
}

//challenge 11 linear search
function linearSearch(array, num) {
  for (k in array) {
    if (array[k] === num) return k;
  }
}

//challange 12 Reverser search
const reverseLinearSearch = (array, num) => {
  let lastindex = -1;
  for (k in array) {
    if (array[k] === num) lastindex = k;
  }
  return lastindex;
};

//challenge 13 linearSearch all
function linearSearchAll(array, num) {
  let indexs = [];
  for (k in array) {
    if (array[k] === num) indexs.push(k);
  }
  return indexs;
}

//challange 14 count occurrences
function countOccurrences(array) {
  let occurrences = {};
  array.forEach((element) => {
    if (element in occurrences) {
      occurrences[element] += 1;
      return;
    }

    occurrences[element] = 1;
  });
  return occurrences;
}

// challenge 15 Remove Dulicate
const removeDuplicate = (num) => [...new Set(num)];

//challenge 16 MostFrequent

function mostFrequent(list) {
  let mostFrequent = list[0];
  let dataFrequency = {};
  list.forEach((element) => {
    if (element in dataFrequency) {
      dataFrequency[element] += 1;
      return;
    }
    dataFrequency[element] = 1;
  });
  for (k in dataFrequency) {
    if (dataFrequency[k] > mostFrequent) mostFrequent = dataFrequency[k];
  }
  return mostFrequent;
}
