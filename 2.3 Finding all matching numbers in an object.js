// Given an array of players (objects), return the names of all players that have a score above 100.
/*** ES6 For of ***/
// const topPlayers = (players) => { 
//   const outputArr = []; 

//   for (let person of players) { 
//     if (person.score > 100) outputArr.push(person.name); 
//   }
//   return outputArr;

// };

const topPlayers = (players) => { 
  const outputArr = [];
  if (players.length === 0) return []; 
  
  if (players[0].score > 100) outputArr.push(players[0].name); 

  return outputArr.concat(topPlayers(players.slice(1)));
}; 

const players = [ { "name": "Alice", "score": 88 }, { "name": "Bob", "score": 120 } ]; 

console.log(topPlayers(players));