/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

//constraints: must only change 1 letter at a timeand transformed word must be in list
//edgecase: end word is not in wordList
var ladderLength = function (beginWord, endWord, wordList) {
  //store all characters in array and group by idx from wordlist, dont store repeats
  let dictionary = {};

  endWord.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (dictionary[i] === undefined) {
        dictionary[i] = {}
      }
    }
  });
  //iterate through begin word and change each character
  //check if new word is in wordlist




};