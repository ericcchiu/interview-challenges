// Get unique letters using set (this gives an obj of keys)
// Sort unique letters (spread operator and sort)

function powerSet(string) {
  // Store and sort a unique set of string characters as an array
  let uniqueSet = [... new Set(string)].sort().join('');

  // Ensure a base case of the subset (empty set)
  let set = { '': true };

  for (let i = 0; i < uniqueSet.length; i++) {
    for (let substring in set) {
      const string = substring.concat(uniqueSet[i]).split('').sort().join('');
      // store string as key inside the set 
      set[string] = true;
    }
  }
  // Return an array of keys from set
  return Object.keys(set).sort();
}

/*** Testing and Logging ***/
let string1 = ['a'];
console.log(powerSet(string1));