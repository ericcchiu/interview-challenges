// Each number key on a standard phone keypad has a set of Latin letters written on it as well:
// http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone number in advertisements 
// to make it more memorable. But there are a lot of combinations!

// Write a function that takes up to four digits of a phone number, and returns a list of all of 
// the words (in alphabetical order) that can be written on the phone with that number 
// (you should return all permutations, not only English words).

const telephoneWords = digitString => {
  const wordList = [];

  const getPermutations = (singleCombo) => {
    if (singleCombo.length === 4) {
      wordList.push(singleCombo);
    } else {
      let digitIndex = digitString.charAt(singleCombo.length);
      let keypadLetter = keypadObj[digitIndex];
      let keyStr;

      for (let keypadIndex = 0; keypadIndex < keypadLetter.length; keypadIndex++) {
        keyStr = singleCombo + keypadLetter.charAt(keypadIndex);
        console.log('WHAT IS THIS ????', keyStr);
        getPermutations(keyStr);
      }
    }
  }
  getPermutations('');
  return wordList;
};

const keypadObj = {
  0: 0,
  1: 1,
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
}

let string1 = "0002";
console.log(telephoneWords(string1)); 