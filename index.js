function isPalindrome(word) {
  // Write your algorithm here
  const lowercaseWord = word.toLowerCase();

/* 
  Add your pseudocode here
*/
const cleanedWord = lowercaseWord.replace(/[^a-z]/g, '');
/*
  Add written explanation of your solution here
*/
const reversedWord = cleanedWord.split('').reverse().join('');
  return cleanedWord === reversedWord;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
