// Write a function that takes as its input a string and returns an array of arrays as shown below 
// sorted in descending order by frequency and then by ascending order by character.

const characterFrequency = (string) => { 
  const storage = {}; 
  const result = []; 
  
  for (let key of string) { 
      storage[key] = storage[key] + 1 || 1
  }
  for (let key in storage) { 
    const tuple = [key, storage[key]]; 
    result.push(tuple);
  }
    result.sort((a, b) => { 
      if (a[1] !== b[1]) {
        return b[1] - a[1];
      } else {
        return a > b ? 1 : -1;
      }
    }); 
    return result;
}


let string = "aaabbc"; 
let string1 = "mississippi";
console.log(characterFrequency(string)); 
console.log(characterFrequency(string1));