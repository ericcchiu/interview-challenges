////////////
//Approach//
////////////
/*
 *  O: Our output should be an integer number representing number of islands on the map
 *  I: Our input is a string representation of a 2d map. Land spaces are zero, water are dots.
 *      ".0...\n.00..\n....0"
 *  C: Two land spaces considered connected if they are adjacent.
 *     Two land spaces are not connected if they are diagonal
 *  E: Consider newline characters \n
 */
/* Strategy
 *  We are going to count the number of islands iteratively. Whenever a string combination satisfies the condition of being an island
 *  we increment the count property by one. This approach will be done iteratively where we iterate over the map string matrix.
 */

/* Pseudocode */
// Create an islands object
// Initialize an islandCounter property to zero
// Split 2D map str by newline characters into an array
// Create a width variable from mapArr
// Then join the arr and reassign to str

// Create a helper function called islandFinder that takes an index as an argument
// Check if current index of 2D map str is a zero
// True: set islands object at that index to true
// If current width is not equal to zero and previous position is not a zero and previous position does not exit
// recursively call islandFinder and look at the adjacent position on the left.

// Return islandCounter property
