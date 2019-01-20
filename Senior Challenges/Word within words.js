/* Given an array of unique words, find the word that contains the greatest number of other words. 
* A word must be at least two letters long.
*/

const nestedWordCount = (wordList) => {
  let maxCount = 0;
  let count, bestWord;

  for (let wordIndex = 0; wordIndex < wordList.length; wordIndex++) {
    let curWord = wordList[wordIndex];
    let copyList = wordList.slice();
    copyList.splice(wordIndex, 1);
    count = 0;

    for (let letter = 0; letter < copyList.length; letter++) {
      if (curWord.includes(copyList[letter])) count++;
      if (count > maxCount) {
        maxCount = count;
        bestWord = curWord;
      }
    }
  }
  return bestWord;
};

const arr1 = ["gray", "grays", "ray", "rays", "strays"];
console.log(nestedWordCount(arr1)); 
