//Reversed sequence
const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) arr.push(i);
  return arr;
};

console.log(reverseSeq(5));

//Vowel Count
function getCount(str) {
  let count = str.split("").filter(function (ele) {
    return (
      ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u"
    );
  }).length;
  return count;
}

console.log(getCount("abracadabrae"));

//Grasshopper - Summation
var summation = function (num) {
  let sum = num;
  for (i = 1; i < num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(9));

//Opposites Attract
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower2 % 2 === 0 && flower1 % 2 !== 0)
  )
    return true;
  else return false;
}

console.log(lovefunc(1, 4));

//Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  let result = [];
  if (input === [] || input === null) return result;
  else {
    let count = 0;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) count++;
      else sum += input[i];
    }
    if (count === 0 && sum === 0) return [];
    result.push(count, sum);
  }
  return result;
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

//Calculate average
function findAverage(array) {
  let sum = 0;
  if (array.length === 0) return sum;
  else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
}

console.log(findAverage([1, 2, 3]));

//Shortest Word
function findShort(s) {
  let words = s.split(" ");
  let Shortest = words[0].length;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < Shortest) {
      Shortest = words[i].length;
    }
  }
  return Shortest;
}
console.log(findShort("Let's travel abroad shall we"));

//Convert a Boolean to a String
function booleanToString(b) {
  return `${String(b)}`;
}

console.log(booleanToString(true));

//Number of People in the Bus
var number = function (busStops) {
  let entered = 0;
  let leave = 0;
  for (let i = 0; i < busStops.length; i++) {
    entered += busStops[i][0];
    leave += busStops[i][1];
  }

  return entered - leave;
};

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

//L1: Set Alarm
function setAlarm(employed, vacation) {
  return employed === true && vacation !== true ? true : false;
}

console.log(setAlarm(true, true));

//Simple multiplication
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(7));

//Century From Year
function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1705));

//Sum of odd numbers
function rowSumOddNumbers(n) {
  return n * n * n;
}
console.log(`#####################`);
//Growth of a Population

function nbYear(p0, percent, aug, p) {
  let yearsCount = 0;
  while (p0 < p) {
    yearsCount++;
    p0 += ((percent / 100) * p0 + aug) | 0;
    console.log(p0);
  }
  return yearsCount;
}

console.log(nbYear(1500, 5, 100, 5000));

//Double Char
function doubleChar(str) {
  let double = str
    .split("")
    .map(function (ele) {
      return `${ele}${ele}`;
    })
    .join("");
  return double;
}
console.log(doubleChar("po"));

//Ones and Zeros
const binaryArrayToNumber = (arr) => {
  let result = 0;
  let exponent = arr.length;
  for (let i = 0; i < arr.length; i++) {
    exponent--;
    result += arr[i] * 2 ** exponent;
  }
  return result;
  //anthor way
  // return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));

//String ends with?
function solution(str, ending) {
  // if (!ending || ending === str.slice(-ending.length)) return true;
  // else return false;
  return str.endsWith(ending);
}
console.log(solution("abcde", ""));

//Disemvowel Trolls
function disemvowel(str) {
  // let disVowel = str
  //   .split("")
  //   .filter(function (ele) {
  //     return (
  //       ele !== "a" &&
  //       ele !== "u" &&
  //       ele !== "e" &&
  //       ele !== "o" &&
  //       ele !== "i" &&
  //       ele !== "A" &&
  //       ele !== "U" &&
  //       ele !== "E" &&
  //       ele !== "O" &&
  //       ele !== "I"
  //     );
  //   })
  //   .join("");
  // return disVowel;
  let Vowel = "aeuie";
  let disVowel = str.split("").filter(function (ele) {
    return !Vowel.includes(ele.toLowerCase());
  });
  return disVowel;
}

console.log(disemvowel("hello eman"));

//Build a pile of Cubes

// function findNb(m) {
//   let n1 = (-1 + Math.sqrt(1 - 4 * -2 * Math.sqrt(m))) / 2;
//   let n2 = (-1 - Math.sqrt(1 - 4 * -2 * Math.sqrt(m))) / 2;
//   if (Math.round(n1) === n1 && n1 > 0) return n1;
//   else if (Math.round(n2) === n2 && n2 > 0) return n2;
//   else return -1;
// }

// console.log(findNb(24723578342962));

function findNb(m) {
  var summary = 0;
  var count = 0;
  while (summary < m) {
    console.log(count);
    count++;
    summary += count ** 3;
    console.log(summary);
  }
  return summary === m ? count : -1;
}
console.log(findNb(1071225));

//Beginner Series #3 Sum of Numbers
function getSum(a, b) {
  let order = [a, b].sort((a, b) => a - b);
  let start = order[0];
  let end = order[1];
  if (start === end) return start;
  for (let i = start + 1; i <= end; i++) {
    start += i;
  }
  return start;
}

console.log(getSum(11, 50));

//Keep Hydrated!
function litres(time) {
  if (time < 1) return 0;
  let litres = 0.5;
  let time2 = Math.floor(time);
  let litresCount = 0;
  while (time2 !== 0) {
    litresCount += litres;
    time2--;
  }
  return Math.floor(litresCount);
}

console.log(litres(1.4));

//Replace With Alphabet Position
console.log(`###############`);
function alphabetPosition(text) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let arrText = text.toLowerCase().split("");
  let pos = [];
  for (let i = 0; i < arrText.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      if (arrText[i].toLowerCase() === alphabets[j]) {
        pos.push(j + 1);
      }
    }
  }

  return pos.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

//Isograms
function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      console.log(j);
      console.log(str[i], str[j]);
      if (str[i] == str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("abA"));

//Highest and Lowest
function highAndLow(numbers) {
  let numArray = numbers.split(" ");
  console.log(numArray);
  let max = Math.max(...numArray);
  let min = Math.min(...numArray);
  return [max, min].join(" ");
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

//Regex validate PIN code
function validatePIN(pin) {
  for (let i = 0; i < pin.length; i++) {
    if (isNaN(parseInt(pin[i]))) {
      return false;
    }
  }
  return pin.length === 4 || pin.length === 6 ? true : false;
}

console.log(validatePIN("-234"));

console.log(`#########`);

//Split Strings
function solution(str) {
  let result = [];
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i += 2) {
      result.push(str[i] + str[i + 1]);
    }
  } else {
    str = str + "_";
    console.log(str[str.length - 1]);
    for (let i = 0; i < str.length; i += 2) {
      result.push(str[i] + str[i + 1]);
    }
  }
  return result;
}

console.log(solution("abcdefu"));

//Simple Pig Latin
function pigIt(str) {
  let strlist = str.split(" ");
  let wordend = [];
  let finalsen = [];
  for (let i = 0; i < strlist.length; i++) {
    wordend.push(strlist[i].substring(1));
    if (strlist[i] === "!" || strlist[i] === "?") {
      finalsen.push(strlist[i].substring(0, 1));
      continue;
    }
    finalsen.push(wordend[i] + strlist[i].substring(0, 1) + "ay");
  }
  return finalsen.join(" ");
}
console.log("Pig latin is cool !");
console.log(pigIt("Pig latin is cool !"));

//Highest Scoring Word
function high(x) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = 0;
  let finalresult = 0;
  let highest = "";
  let wordsList = x.split(" ");
  for (let i = 0; i < wordsList.length; i++) {
    for (let j = 0; j < wordsList[i].length; j++) {
      for (let k = 0; k < alphabets.length; k++) {
        if (wordsList[i][j] === alphabets[k]) {
          result += k + 1;
        }
      }
    }

    if (result > finalresult) {
      finalresult = result;
      highest = wordsList[i];
    }
    result = 0;
  }
  return highest;
}

console.log(high("aa b"));

//Unique In Order

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === result[result.length - 1]) continue;
    else {
      result.push(iterable[i]);
    }
  }
  return result;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
