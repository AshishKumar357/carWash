var text = "Ashish 348";
var flag = 0;
var reason = "";
const result = checkReason(text);

function checkReason(text) {
  var num = parseInt(text);

  if (text.includes("7")) {
    flag = 1;
    reason = text + " contains number 7";
  } else if (num % 7 == 0) {
    flag = 1;
    reason = text + " contains number that is divisible by 7";
  } else if (text.length % 7 == 0) {
    flag = 1;
    reason = "Length of " + text + " is divisible by 7";
  } else if (sumOfDigit(num)) {
    flag = 1;
    reason = "Sum of digits of " + text + " is divisible by 7";
  } else if (countOperations(text)) {
    // flag = 1;
    // reason = "Sum of digits of " + text + " is divisible by 7";
  } else {
    flag = 0;
  }
  print (flag, reason)
}

function sumOfDigit(num) {
  var sum1 = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  if (sum1 % 7 == 0) {
    return true;
  } else return false;
}

function countOperations(text) {
  var flag = 0;
  var countNum = 0;
  var countChar = 0;
  var countSpace = 0;
  var countSpecial = 0;

  try {
    var regex = /[a-zA-Z0-9]/g; // only count letters and numbers
    countNumOrLetters = text.match(regex).length;
  } catch (error) {
    countNumOrLetters = 0;
  }
  try {
    var regex = /[a-zA-Z]/g; // only count letters
    countChar = text.match(regex).length;
  } catch (error) {
    countChar = 0;
  }
  try {
    var regex = /[0-9]/g; // only count numbers
    countNum = text.match(regex).length;
  } catch (error) {
    countNum = 0;
  }
  try {
    var regex = /[ ]/g; // only count numbers
    countSpace = text.match(regex).length;
  } catch (error) {
    countSpace = 0;
  }

  console.log(countNumOrLetters, countSpace, countNum, countChar, countSpecial);
  return true;
}

function print(boolVal, reason) {
  if (boolVal == true) {
    console.log(reason);
    console.log("Thala for a reason");
  } else {
    console.log("Thala for No reason");
  }
}
