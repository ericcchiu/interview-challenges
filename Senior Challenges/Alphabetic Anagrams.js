// In an alphabetized array of every anagram of a given string, 
// what index would the given string occupy?

// Consider an anagram as any sequence of letters. For any word
// with at least two different letters, there are other words 
// composed of the same letters but in a different order 
// (for instance, “RESISTANCE”/”ANCESTRIES”, which happen to 
// both be dictionary words; for our purposes “SISTANERCE” is
// also a word composed of the same letters as these two).

// Given a word, return its index number starting at 1 (not 0) 
// to represent the rank of the anagram (for example, the 42nd 
// element is the 42nd alphabetic anagram).


const anagramMaker = (string) => {
  let anagramResults = {};

  const makeAnagrams = (textInput, choices) => {
    if (textInput.length === string.length) return anagramResults[textInput] = true;
    for (let i = 0; i < choices.length; i++) {
      makeAnagrams(textInput + choices[i], choices.slice(0, i) + choices.slice(i + 1));
    }
  }
  makeAnagrams('', string);
  return Object.keys(anagramResults);
};

const anagramPosition = (string) => {
  let anagrams = anagramMaker(string);
  let rank = 0;
  for (let i = 0; i < anagrams.length; i++) {
    if (string === anagrams[i]) rank = i + 1;
  }
  return rank;
};

let exampleStr1 = 'cat';
console.log(anagramMaker(exampleStr1));
console.log(anagramPosition('cat')); 