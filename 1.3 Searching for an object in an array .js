// Given a name (string) and an array of people (objects), find the person 
// with the given name and return his/her hobby. Return false if there is no person with the given name.

/*** ES6 ***/
// const findPerson = (name, people) => { 
//   for (let person of people) { 
//     if (person.name === name) return person.hobby; 
//   }
//   return false; 
// }; 

/*** Recursion ***/
const findPerson = (name, people) => { 
  
  if (people[0] === undefined) return false; 
  
  if (people[0].name === name) return people[0].hobby; 
  
  return findPerson(name, people.slice(1));

}

const people = [ { "name": "Alice", "hobby": "programming" }, { "name": "Bob", "hobby": "gaming" } ];
const group = [{"name": 'Carly', "hobby": "dancing"}, {"name": 'Dan', 'hobby': 'climbing'}]; 

console.log(findPerson('Alice', people)); 
console.log(findPerson('Carl', group)); 
